<template>
    <div class="hotel-card d-flex flex-row w-100">
        <div class="images-container d-flex flex-column justify-content-between">
            <b-img width="200px" height="200px" class="hero-image" :src="hotel.property.heroImage.url" :alt="hotel.property.heroImage.caption"/>
                <div v-if="hotel.property.gallery && hotel.property.gallery.length > 0" class="d-flex flex-row justify-content-between mt-1">
                    <span v-for="(images,i) of hotel.property.gallery" v-show="i < 4" :key="i">
                    <b-img-lazy width="48px" height="48px" :src="imageSelector(images)" alt="" />
                </span>
            </div>
        </div>
        <div class="details-container d-flex flex-row justify-content-between w-100">
            <div class="informations d-flex flex-column ml-3 my-3 mr-1">
                <span class="d-flex flex-row">
                    <h3 v-if="hotel.property.name" class="mr-2 mt-1">{{ hotel.property.name }}</h3>
                    <BaseStar v-if="hotel.property.starRating" :count="hotel.property.starRating" />
                </span>
                <p v-if="hotel.property.location" class="xs-font-size text-grey-100 my-1">{{ hotel.property.location.address }}, {{ hotel.property.location.city }}, {{ hotel.property.location.country }}, {{ hotel.property.location.postalCode }}</p>
                <p v-if="hotel.property.reviews" class="xs-font-size text-grey-400 my-1">{{ hotel.property.reviews.summary.text }}</p>
                <span>
                    <BaseTag v-for="(text, i) of tagsList" :key="i" v-show="i <= hotel.packages[0].foodCode" :text="text" />
                </span>
                <!-- TODO: I dont find any data with covidSafety field! -->
                <span v-if="hotel.property.reviews && hotel.property.reviews.covidSafety">
                    <img src="@/assets/icons/location.svg" alt="">
                    <span class="xs-font-size text-grey-100 ml-2">{{ hotel.property.reviews.covidSafety }}</span>
                </span>
            </div>
            <div class="price-details d-flex flex-column justify-content-between  text-right">
                <img width="146px" src="@/assets/images/TY-score-widget.png" alt="">
                <div class="d-flex flex-column xs-font-size">
                    <span v-if="hasDiscount">
                        <span class="bg-light-blue p-1 text-white font-weight-bold">
                            {{ $t('components.hotelCard.save') }} {{ discountPercentage }}% {{ $t('components.hotelCard.today') }}!
                        </span>
                    </span>
                    <span class="text-grey-400 my-1">
                        {{ $t('components.hotelCard.nightlyAvg') }}.
                    </span>
                    <span class="d-flex flex-row justify-content-end">
                        <span v-if="hasDiscount" class="text-grey-400 mr-1"><s class="discounted-price">{{ hotel.packages[0].adjustedDisplayRate.currency }} {{ Math.floor(hotel.packages[0].displayRate.value) }}</s></span><h2>{{ hotel.packages[0].adjustedDisplayRate.currency }} {{ Math.floor(hotel.packages[0].adjustedDisplayRate.value) }}</h2>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTag from './UI/BaseTag.vue'
import BaseStar from './UI/BaseStar.vue'

export default {
    name: "HotelCard",
    components: {
        BaseTag,
        BaseStar
    },
    props: {
        hotel: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            tagsList: {
                1: this.$t('components.hotelCard.foodTags.item1'),
                2: this.$t('components.hotelCard.foodTags.item2'),
                3: this.$t('components.hotelCard.foodTags.item3'),
                4: this.$t('components.hotelCard.foodTags.item4'),
                5: this.$t('components.hotelCard.foodTags.item5'),
                6: this.$t('components.hotelCard.foodTags.item6'),
                7: this.$t('components.hotelCard.foodTags.item7')
            }
        }
    },
    computed: {
        hasDiscount () {
            return this.hotel.packages[0].adjustedDisplayRate.value !== this.hotel.packages[0].displayRate.value
        },
        discountPercentage () {
           return Math.floor((1 - (this.hotel.packages[0].adjustedDisplayRate.value / this.hotel.packages[0].displayRate.value)) * 100) 
        }
    },
    methods: {
        imageSelector(images) {
            if (images.xs && images.xs.url){
                return images.xs.url
            } else if (images.s && images.s.url){
                return images.s.url
            } else if (images.m && images.m.url){
                return images.m.url
            } else if (images.l && images.l.url){
                return images.l.url
            } else if (images.xl && images.xl.url){
                return images.xl.url
            } else {
                return '@/assets/logo.png'
            }
        }
    }
}
</script>
