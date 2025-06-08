<template>
    <div class="bg-primary text-white flex justify-center items-center py-[160px] rounded-br-[64px] rounded-bl-[64px] px-4">

        <div class="text-center max-w-[880px]">
            <p class="mb-6 text-[24px] md:text-[32px]">{{ data.values.title.value }}</p>
            <h1 class="text-h1-sm font-sangBleu md:text-h1">{{ data.values.subtitle.value }}</h1>
        </div>

    </div>
</template>

<script setup lang="ts">
    import type { PageContentItem } from '~/types/page'
    const props = defineProps<{
        data: PageContentItem
    }>()

</script>
