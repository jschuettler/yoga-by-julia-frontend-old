<template>
    <div class="text-primary md:flex justify-center items-center py-[80px] px-4">

        <div class="text-left md:w-[800px]">
            <h2 class="text-h2-sm font-sangBleu md:text-h2 mb-6">{{ props.data.values.name.value }}</h2>

            <div v-if="props.data?.nested?.prices" v-for="item in props.data.nested.prices" class="flex mb-4 items-center justify-between gap-[20px]" :key="item.id">
                <span >{{ item.values.name.value }}</span>
                <span class="font-sangBleu text-[20px] md:text-[24px]">{{item.values.price.value}}</span>
            </div>

            <div class="mt-12" v-if="props.data.values.text.value">
                <p >{{ props.data.values.text.value }}</p>
            </div>
            <div class="mt-12 text-center" v-if="props.data.values.email_button.value">
                <a class="rounded-xl bg-primary text-white px-10 py-4" href="mailto:hi@yoga-by-julia.de">hi@yoga-by-julia.de</a>
            </div>

            

        </div>


    </div>
</template>

<script setup lang="ts">
    import type { PageContentItem } from '~/types/page'
    const props = defineProps<{
        data: PageContentItem
    }>()

    console.log(props)

</script>
