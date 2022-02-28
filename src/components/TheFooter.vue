<template>
    <div class="footer d-flex flex-column text-center">
        <div class="bg-grey-100 text-white sm-font-size">
            <div class="my-4">
                <span v-for="item in menu" :key="item.id" class="mx-2 mx-lg-3">
                    {{ item.title }}
                </span>
            </div>
        </div>
        <div class="bg-black text-white xs-font-size">
            <div class="my-3">
                {{ $t('components.footer.copyright') }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { title: this.$t('components.footer.item1'), href:'#', id: 0 },
                { title: this.$t('components.footer.item2'), href:'#', id: 1 },
                { title: this.$t('components.footer.item3'), href:'#', id: 2 },
                { title: this.$t('components.footer.item4'), href:'#', id: 3 }
            ]
        }
    }
}
</script>
