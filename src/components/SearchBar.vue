<template>
    <div class="search-bar  py-2 bg-dark-blue">
        <div class="frame frame-lg d-flex flex-row justify-content-between">
            <base-input id="1" :datalist="autoSuggest" @change="updateCity" type="search" icon="Search" size="lg" placeholder="Singapore, Kuala Lumpur, Manila" />
            <base-input type="text" id="2" icon="calendar" size="sm" placeholder="Jul 19  –  Jul 20              1 night" />
            <base-input type="text" id="3" size="sm" placeholder="2 adults, 0 children, 1 room" />
            <base-button @click="search" size="sm" class="bg-light-blue text-white font-weight-bold"> {{ $t('components.searchBar.search') }} </base-button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "SearchBar",
    data() {
        return {
            cityCode: null
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