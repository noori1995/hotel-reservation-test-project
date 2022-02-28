<template>
    <div class="filter-item p-3 bg-white half-border-radius">
        <template v-if="type === 'options'">
            <div class="d-flex flex-row justify-content-between mb-2">
                <h4>{{ title }}</h4><span v-show="clearButton" class="font-weight-bold xs-font-size">{{ $t('common.clear') }}</span>
            </div>
            <div class="text-left">
                <div v-for="item in data.slice(0, numberOfVisibleItems)" :key="item.value" class="d-flex flex-row justify-content-between">
                    <b-form-checkbox button-variant="primary">
                        <template v-if="item.icon ==='star'">
                            <BaseStar :src="'@/static/icons/star.svg'" :count="item.number" />
                        </template>
                        <template v-else-if="item.text">
                            <span class="text-grey-100 xs-font-size">{{ item.text }}</span>
                        </template>
                    </b-form-checkbox>
                    <span class="text-grey-400 xs-font-size">{{ item.count }}</span>
                </div>
                <template v-if="data.length > numberOfVisibleItems">
                    <template v-if="!iscollapseOpen">
                        <span class="text-dark-blue pr-1 xs-font-size" v-b-toggle="`filter-${id}`">
                            {{ $t('components.filterItem.show') }} {{ data.length - numberOfVisibleItems }} {{ $t('components.filterItem.more') }}
                        </span>
                        <img src="@/static/icons/drop-down-dark-blue.svg">
                    </template>
                    <b-collapse :id="`filter-${id}`" @show="iscollapseOpen = true" @hide="iscollapseOpen = false">
                        <div v-for="item in data.slice(numberOfVisibleItems)" :key="item.value" class="d-flex flex-row justify-content-between">
                            <b-form-checkbox button-variant="primary">
                                <template v-if="item.icon ==='star'">
                                    <img src="@/static/icons/star.svg" v-for="i in item.number" :key="i.number" />
                                </template>
                                <template v-else-if="item.text">
                                    <span class="text-grey-100 xs-font-size">{{ item.text }}</span>
                                </template>
                            </b-form-checkbox>
                            <span class="text-grey-400 xs-font-size">{{ item.count }}</span>
                        </div>
                    </b-collapse>
                    <template v-if="iscollapseOpen">
                        <span class="text-dark-blue pr-1 xs-font-size" v-b-toggle="`filter-${id}`">
                            {{ $t('components.filterItem.showLess') }}
                        </span>
                        <img class="rotate-180" src="@/static/icons/drop-down-dark-blue.svg">
                    </template>
                </template>
            </div>
        </template>
        <template v-else-if="type === 'search'">
            <div class="d-flex flex-column justify-content-between mb-2">
                <div class="d-flex flex-row justify-content-between">
                    <h4>{{ title }}</h4>
                    <span v-show="clearButton" class="font-weight-bold xs-font-size cursor-pointer">{{ $t('common.clear') }}</span>
                </div>
                  <base-input id="2" type="search" name="search" icon="Search" size="md" :placeholder="this.$t('components.filterItem.search.placeholder')" />
            </div>
        </template>
        <template v-else-if="type === 'range'">
            <div class="d-flex flex-column justify-content-between mb-2">
                <div class="d-flex flex-row justify-content-between">
                    <h4>{{ title }}</h4>
                    <span v-show="clearButton" class="font-weight-bold xs-font-size">{{ $t('common.clear') }}</span>
                </div>
                <VueSlider
                    v-model="range"
                    class="mx-2"
                    dot-size="16"
                    :min-range="10"
                    :dot-style="{ backgroundColor: '#fff', border: '2px #00A1E5 solid' }"
                    :rail-style="{ height: '7px' }"
                    :process-style="{ backgroundColor: '#00A1E5', height:'7px', border: '1px #00A1E5 solid' }"
                    :lazy="true"
                />
                <div class="d-flex flex-row mt-3 justify-content-between xs-font-size text-center">
                    <div class="box-size-1 border border-grey-700 py-1">SGD {{ range[0] }}</div>
                    <span class="divs-spacer border-bottom border-grey-400"></span>
                    <div class="box-size-1 border border-grey-700 py-1">SGD {{ range[1] }}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import BaseStar from './UI/BaseStar.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
export default {
    name: "FilterItem",
    components: {
        VueSlider,
        BaseStar
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        numberOfVisibleItems: {
            type: Number,
            required: false,
            default: 3
        },
        clearButton: {
            type: Boolean,
            required: false,
            default: false
        },
        data: {
            type: [Object, Array],
            required: true
        }
    },
    data() {
        return {
            iscollapseOpen: false,
            range: [0,100]
        }
    }
}
</script>