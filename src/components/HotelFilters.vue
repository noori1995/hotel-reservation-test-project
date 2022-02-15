<template>
    <div class="hotel-filters d-flex flex-column mt-2 mr-2">
        <div class="show-map d-flex flex-column mb-1">
            <img src="@/assets/images/sample-map.png" alt="map" />
            <div class="button-container">
                <base-button @click="showOnMap" size="md" class="bg-dark-blue text-white font-weight-bold m-auto"> {{ $t('components.hotelFilters.showOnMap') }} </base-button>
            </div>
        </div>
        <div v-for="filter in filters" :key="filter.id" class="d-flex flex-column mb-1">
            <FilterItem :id="filter.id" :type="filter.type" :title="filter.title" :numberOfVisibleItems="filter.numberOfVisibleItems" :clearButton="filter.clearButton" :data="filter.data ? filter.data : []" />
        </div>
    </div>
</template>

<script>
import FilterItem from './FilterItem.vue';
export default {
    name: "HotelFilters",
    components: {
        FilterItem
    },
    data() {
        return {
            filters: [
                { id:1, type: "range", title: this.$t('components.hotelFilters.pricePerNight.title'), clearButton: true, data: { min: 0, max: 550, currency: 'SGD' } },
                { id:2, type: "options", title: this.$t('components.hotelFilters.reviews.title'), clearButton: true, numberOfVisibleItems:6, data: [ { text: this.$t('components.hotelFilters.reviews.option1'), value:1, count: 999 }, { text: this.$t('components.hotelFilters.reviews.option2'), value:2, count: 999 }, { text: this.$t('components.hotelFilters.reviews.option3'), value:3, count: 999 }, { text: this.$t('components.hotelFilters.reviews.option4'), value:4, count: 999 }, { text: this.$t('components.hotelFilters.reviews.option5'), value:5, count: 999 }, { text: this.$t('components.hotelFilters.reviews.option6'), value:6, count: 999 } ] },
                { id:3, type: "options", title: this.$t('components.hotelFilters.starRating.title'), clearButton:true, numberOfVisibleItems:6, data: [ { number:5, icon:'star', value:1, count: 999 }, { number:4, icon:'star', value:2, count: 999 }, { number:3, icon:'star', value:3, count: 999 }, { number:2, icon:'star', value:4, count: 999 }, { number:1, icon:'star', value:5, count: 999 }, { text: this.$t('components.hotelFilters.starRating.option6'), value:6, count: 999 } ] },
                { id:4, type: "search", title: this.$t('components.hotelFilters.hotelName.title'), clearButton: false },
                { id:5, type: "options", title: this.$t('components.hotelFilters.reservationPolicy.title'), clearButton: false, numberOfVisibleItems:3, data: [ { text: this.$t('components.hotelFilters.reservationPolicy.option1'), value:1, count: 999 }, { text: this.$t('components.hotelFilters.reservationPolicy.option2'), value:2, count: 999 }, { text: this.$t('components.hotelFilters.reservationPolicy.option3'), value:3, count: 999 } ] },
                { id:6, type: "options", title: this.$t('components.hotelFilters.mealPlan.title'), clearButton: false, numberOfVisibleItems:3, data: [ { text: this.$t('components.hotelFilters.mealPlan.option1'), value:1, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option2'), value:2, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option3'), value:3, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option4'), value:4, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option5'), value:5, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option6'), value:6, count: 999 }, { text: this.$t('components.hotelFilters.mealPlan.option7'), value:7, count: 999 } ] },
                { id:7, type: "options", title: this.$t('components.hotelFilters.propertyType.title'), clearButton: false, numberOfVisibleItems:3, data: [ { text: this.$t('components.hotelFilters.propertyType.option1'), value:1, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option2'), value:2, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option3'), value:3, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option4'), value:4, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option5'), value:5, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option6'), value:6, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option7'), value:7, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option8'), value:8, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option9'), value:9, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option10'), value:10, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option11'), value:11, count: 999 }, { text: this.$t('components.hotelFilters.propertyType.option12'), value:12, count: 999 } ] },
                { id:8, type: "options", title: this.$t('components.hotelFilters.facilities.title'), clearButton: false, numberOfVisibleItems:3, data: [ { text: this.$t('components.hotelFilters.facilities.option1'), value:1, count: 999 }, { text: this.$t('components.hotelFilters.facilities.option2'), value:2, count: 999 }, { text: this.$t('components.hotelFilters.facilities.option3'), value:3, count: 999 }, { text: this.$t('components.hotelFilters.facilities.option4'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option5'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option6'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option7'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option8'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option9'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option10'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option11'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option12'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option13'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option14'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option15'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option16'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option17'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option18'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option19'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option20'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option21'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option22'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option23'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option24'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option25'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option26'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option27'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option28'), count: 999 }, { text: this.$t('components.hotelFilters.facilities.option29'), count: 999 } ] }
            ]
        }
    },
    methods: {
        showOnMap: () => {
            console.log('show on map clicked');
        }
    }
}
</script>