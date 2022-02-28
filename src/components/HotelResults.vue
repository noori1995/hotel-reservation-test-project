<template>
    <div class="hotel-results d-flex flex-column text-left mt-2 ml-lg-2">
        <b-form-select class="d-block d-lg-none bg-dark-blue text-white font-weight-bold" v-model="selectedSortingMethod" :options="sortingOptions" />
        <h3 class="text-black my-2">
            {{ searchedCity }}: {{ totalItemsComputed }} {{ $t('components.hotelResults.propertiesFound') }}
        </h3>
        <!-- desktop only -->
        <div class="text-grey-100 d-none d-lg-block">
            <b-tabs nav-class="bg-white md-font-size half-border-radius font-weight-bold" pills justified>
                <b-tab v-for="tab in tabs" :key="tab.id" :title="tab.title" :active="tab.id === 1" :lazy="tab.id !== 1">
                    <template v-if="loading">
                       <LoadingPlaceHolder />
                    </template>
                    <template v-else-if="errorMessage">
                        <div class=" d-flex flex-column justify-content-center w-100 mt-5">
                            <span class="text-center d-flex flex-column mx-auto">
                                <img width="23px" class="mx-auto my-2" src="@/static/icons/error.svg" alt="search icon">
                                <span> {{ $t('common.oops') }} </span>
                                <span class="xs-font-size mt-1">{{ errorMessage }}</span>
                            </span>
                        </div>
                    </template>
                    <template v-else-if="hotelsListComputed.length > 0">
                        <div class="mt-2">
                            <div v-for="(hotel, index) of hotelsListComputed" :key="index" class="hotel-card d-flex flex-row w-100 bg-white p-2 my-2 half-border-radius">
                                <HotelCard :hotel="hotel" :index="index" />
                            </div>
                            <div class="d-flex flex-row justify-content-between">
                                <BackToTop />
                                <BasePagination :data="hotelsAvailability.pagination" />
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class=" d-flex flex-column justify-content-center w-100 mt-5">
                            <span class="text-center d-flex flex-column mx-auto">
                                <img width="23px" class="mx-auto my-2" src="@/static/icons/search2.svg" alt="search icon">
                                <span> {{ $t('components.hotelResults.sorry') }} </span>
                            </span>
                        </div>
                    </template>
                </b-tab>
            </b-tabs>
        </div>
        <!-- desktop only -->
        <!-- mobile only -->
        <div class="d-block d-lg-none">
            <template v-if="loading">
                <LoadingPlaceHolder />
            </template>
            <template v-else-if="errorMessage">
                <div class=" d-flex flex-column justify-content-center w-100 mt-5">
                    <span class="text-center d-flex flex-column mx-auto">
                        <img width="23px" class="mx-auto my-2" src="@/static/icons/error.svg" alt="search icon">
                        <span> {{ $t('common.oops') }} </span>
                        <span class="xs-font-size mt-1">{{ errorMessage }}</span>
                    </span>
                </div>
            </template>
            <template v-else-if="hotelsListComputed.length > 0">
                <div class="mt-2">
                    <div v-for="(hotel, index) of hotelsListComputed" :key="index" class="hotel-card d-flex flex-row w-100 bg-white p-2 my-2 half-border-radius">
                        <HotelCard :hotel="hotel" :index="index" :isMobile="true" />
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                        <BackToTop />
                        <BasePagination :data="hotelsAvailability.pagination" />
                    </div>
                </div>
            </template>
            <template v-else>
                <div class=" d-flex flex-column justify-content-center w-100 mt-5">
                    <span class="text-center d-flex flex-column mx-auto">
                        <img width="23px" class="mx-auto my-2" src="@/static/icons/search2.svg" alt="search icon">
                        <span> {{ $t('components.hotelResults.sorry') }} </span>
                    </span>
                </div>
            </template>
        </div>
        <!-- mobile only -->
    </div>
</template>

<script>
import HotelCard from './HotelCard.vue'
import BasePagination from './UI/BasePagination.vue'
import BackToTop from './UI/BaseScroll.vue'
import LoadingPlaceHolder from './LoadingPlaceholder.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        HotelCard,
        LoadingPlaceHolder,
        BasePagination,
        BackToTop
    },
    data() {
        return {
            tabs: [
                { title: this.$t('components.hotelResults.tab1'), sort: "", id: 1 },
                { title: this.$t('components.hotelResults.tab2'), sort: "", id: 2 },
                { title: this.$t('components.hotelResults.tab3'), sort: "", id: 3 },
                { title: this.$t('components.hotelResults.tab4'), sort: "", id: 4 }
            ],
            sortingOptions: [
                { value: null, text: 'Select one' },
                { value: 'popularity', text: 'Popularity' },
                { value: 'price-l-to-h', text: 'Price (lowest first)' },
                { value: 'price-h-to-l', text: 'Price (highest first)' },
                { value: 'reviews', text: 'Reviews' },
                { value: 'discount', text: 'Discount' }
            ],
            selectedSortingMethod: null
        }
    },
    computed: {
        ...mapGetters({
        hotelResults: 'hotelResults',
        searchedText: 'searchedText',
        autoSuggest: 'autoSuggest',
        errorMessage: 'errorMessage',
        loading: 'loading'
        }),
        hotelsListComputed () {
            return this.hotelResults && this.hotelResults.outlets ? this.hotelResults.outlets.availability.results : []
        },
        hotelsAvailability () {
            return this.hotelResults && this.hotelResults.outlets ? this.hotelResults.outlets.availability : {}
        },
        totalItemsComputed () {
            return this.hotelResults && this.hotelResults.outlets && this.hotelResults.outlets.availability.pagination ? this.hotelResults.outlets.availability.pagination.totalItems : 0
        },
        searchedCity () {
            return this.searchedText ? this.autoSuggest.find(el => el.cityCode === this.searchedText).label.split(',')[1] : this.$t('components.hotelResults.city')
        }
    }
}
</script>
