<template>
  <div class="the-page">
    <div v-if="item">
      <h1>{{ item.values.name.value }}</h1>
      <ul>
        <li v-for="mod in modulesDeep" :key="mod.id">
          <pre>{{ mod }}</pre>
        </li>
      </ul>
    </div>
    <div v-else>
      Seite nicht gefunden
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRuntimeConfig, computed } from '#imports'
import type { PageContentItem, PageContentResponse } from '~/types/page'

const route = useRoute()
const rawSlug = route.params.slug
  ? '/' + (route.params.slug as string[]).join('/')
  : '/'
const config = useRuntimeConfig()

const { data: pageRes } = await useAsyncData<PageContentResponse>(
  `page-content-${rawSlug}`,
  () =>
    $fetch<PageContentResponse>(
      `${config.public.apiBaseUrl}/api/collections/page/content/filter`,
      {
        params: { field: 'slug', value: rawSlug },
        headers: { 'X-API-Key': config.apiKey }
      }
    )
)

const item = computed<PageContentItem | null>(
  () => pageRes.value?.data?.[0] || null
)

const moduleIds = computed<string[]>(() => {
  return item.value
    ? item.value.values.modules.map((m) => m.value)
    : []
})

const { data: modulesRes } = await useAsyncData(
  `module-contents-${rawSlug}`,
  async () => {
    const ids = moduleIds.value
    const promises = ids.map((id) =>
      $fetch<{ success: boolean; data: PageContentItem; meta: { timestamp: string } }>(
        `${config.public.apiBaseUrl}/api/content/${id}`,
        {
          headers: { 'X-API-Key': config.apiKey }
        }
      )
    )
    const results = await Promise.all(promises)
    return results.map((r) => r.data)
  }
)

const { data: nestedRes } = await useAsyncData(
  `nested-modules-${rawSlug}`,
  async () => {
    const level1 = modulesRes.value || []
    if (!level1.length) return []

    async function fetchNested(mod: PageContentItem) {
      const nestedFields: Record<string, PageContentItem[]> = {}
      for (const [key, fieldValue] of Object.entries(mod.values)) {
        if (Array.isArray(fieldValue)) {
          const ids = (fieldValue as Array<{ value: string }>).map((e) => e.value)
          const promises = ids.map((id) =>
            $fetch<{ success: boolean; data: PageContentItem; meta: { timestamp: string } }>(
              `${config.public.apiBaseUrl}/api/content/${id}`,
              {
                headers: { 'X-API-Key': config.apiKey }
              }
            )
          )
          const results = await Promise.all(promises)
          nestedFields[key] = results.map((r) => r.data)
        }
      }
      return { ...mod, nested: nestedFields }
    }

    const all = await Promise.all(level1.map((m) => fetchNested(m)))
    return all
  }
)

const modulesDeep = computed(() => nestedRes.value || [])
</script>

<style scoped>
.module-block {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
