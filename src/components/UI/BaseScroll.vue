<template>
    <div @click="scrollToTop" class="base-scroll sm-font-size text-dark-blue cursor-pointer">
        {{ $t('components.baseScroll.backToTop') }}
    </div>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });     
        }
    }
}
</script>
