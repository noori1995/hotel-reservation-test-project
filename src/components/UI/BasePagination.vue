<template>
    <div class="base-pagination text-right d-flex flex-column flex-lg-row">
        <span class="sm-font-size mx-2">
            {{ $t('components.basePagination.showingResults') }} {{ this.data.showing[0] }} - {{ this.data.showing[1] }} {{ $t('common.of') }} {{ this.data.totalItems }}
        </span>
        <span>
            <img src="@/static/icons/arrow.svg" class="mx-1 cursor-pointer">
            <span v-for=" i in pagesCount" :key="i" class="mx-1 sm-font-size cursor-pointer">
                {{ i }}
            </span> 
            <img src="@/static/icons/arrow.svg" class="mx-1 rotate-180 cursor-pointer">
        </span>
    </div>    
</template>

<script>
export default {
    name: "BasePagination",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        pagesCount () {
           return Math.floor(this.data.totalItems / (this.data.showing[1] - this.data.showing[0] + 1))
        }
    }
}
</script>