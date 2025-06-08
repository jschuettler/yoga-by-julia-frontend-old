<template>
  <div class="the-module">
    <component
      v-if="componentFile"
      :is="componentFile"
      :data="data"
    />
  </div>
</template>

<script setup lang="ts">
import type { PageContentItem } from '~/types/page'
import { computed } from 'vue'
import ContentStage from '~/components/content-stage.vue'
import ContentText from '~/components/content-text.vue'
import ContentPrice from '~/components/content-price.vue'
import ContentHtml from '~/components/content-html.vue'

const props = defineProps<{
  data: PageContentItem|any
}>()


const COMPONENTS: Record<string, any> = {
  content_stage: ContentStage,
  content_text: ContentText,
  content_price: ContentPrice,
  content_html: ContentHtml,
}

const componentAlias = props.data.collection.alias as string

console.log("componentAlias ", componentAlias)
console.log("values ", props)

const componentFile = computed(() => {
  return COMPONENTS[componentAlias] || ''
})

</script>
