<template>
    <div class="search-bar">
        <!-- desktop only -->
        <div class="py-2 bg-dark-blue d-none d-lg-block">
            <div class="frame frame-lg d-flex flex-row justify-content-between w-100">
                <div class="row mx-auto">
                    <base-input class="col-12 col-md-6 col-lg-5 my-2" id="1" :datalist="autoSuggest" @change="updateCity" type="search" icon="Search" size="lg" placeholder="Singapore, Kuala Lumpur, Manila" />
                    <base-input class="col-6 col-md-3 col-lg-3 my-2" type="text" id="2" icon="calendar" size="sm" placeholder="Jul 19  –  Jul 20              1 night" />
                    <base-input class="col-6 col-md-3 col-lg-3 my-2" type="text" id="3" size="sm" placeholder="2 adults, 0 children, 1 room" />
                    <base-button class="col-12 col-lg-1 my-2 bg-light-blue text-white font-weight-bold" @click="search" size="sm"> {{ $t('components.searchBar.search') }} </base-button>
                </div>
            </div>
        </div>
        <!-- desktop only -->
        <!-- mobile only -->
        <div class="d-block d-lg-none bg-white text-left border-top border-transparent" @click="showModal = true">
            <div class="d-flex flex-row px-3 py-2">
                <div>
                    <img src="@/static/icons/search.svg" width="16px" />
                </div>
                <div class="ml-3">
                    <h4 class="m-0">Singapore, Singapore</h4>
                    <div class="text-grey-100 xs-font-size">
                        <span class="mr-3">Aug 18 - Aug 19</span><span>2 adults, 1 room, 0 children</span>
                    </div>
                </div>
            </div>
        </div>

        <b-modal v-model="showModal" hide-footer title="Where?" dialog-class="m-0 h-100" content-class="h-100">
            <div class="row mx-auto">
                    <base-input class="col-12 my-2" id="1" :datalist="autoSuggest" @change="updateCity" type="search" icon="Search" size="lg" placeholder="Singapore, Kuala Lumpur, Manila" />
                    <base-input class="col-12 my-2" type="text" id="2" icon="calendar" size="sm" placeholder="Jul 19  –  Jul 20              1 night" />
                    <base-input class="col-12 my-2" type="text" id="3" size="sm" placeholder="2 adults, 0 children, 1 room" />
                    <base-button class="col-6 mx-3 my-2 bg-light-blue text-white font-weight-bold" @click="search" size="sm"> {{ $t('components.searchBar.search') }} </base-button>
                </div>
        </b-modal>
        <!-- mobile only -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "SearchBar",
    data() {
        return {
            cityCode: null,
            showModal: false
        }
    },
    computed: {
         ...mapGetters({
            autoSuggest: 'autoSuggest'
        }),
    },
    methods: {
        ...mapActions({
            hotelSearchAction: 'hotelSearch',
            autoSuggestAction: 'autoSuggest'
        }),
        async search () {
            this.showModal = false
            await this.hotelSearchAction({ cityCode: this.cityCode })
        },
        updateCity (label) {
            this.cityCode = this.autoSuggest.find(el => el.label === label).cityCode
        }
    },
    mounted() {
        this.autoSuggestAction()
    }
}
</script>