<template>
    <div class="text-primary flex justify-center items-center py-[80px] px-4">
        <div class="md:w-[800px] content-text__text">
            <div v-html="cleanHtml(props.data.values.html.value)" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { cleanHtml } from '~/utils/text'
    import type { PageContentItem } from '~/types/page'
    const props = defineProps<{
        data: PageContentItem
    }>()

</script>

<style>
    .content-text__text {
        p {
            margin-bottom: 16px;
        }
    }
</style>
