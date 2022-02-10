<template>
    <div class="profile-box d-flex flex-row">
        <b-nav-item-dropdown no-caret toggle-class="custom-header-link" >
            <template #button-content>
                <div>
                    <span >{{ $t('components.header.myAccount') }}</span>
                </div>
            </template>
            <b-dropdown-item href="#">
                TODO
            </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item @click.prevent="logout" link-classes="custom-header-link" >{{ $t('common.logout') }}</b-nav-item>
    </div>
</template>

<script>
export default {
    methods:{
        logout: () => {
            console.log('TODO:logging out')
        }
    } 
}
</script>