<template>
  <div class="header">
    <b-navbar class="my-3 mx-5 d-flex flex-row justify-content-between" >
        <img src="@/assets/logo.png" width="227px" alt="cloud travel logo" />
        <div class="d-flex flex-row">
          <template v-for="(item, index) in menu">
              <b-nav-item-dropdown :key="index" no-caret toggle-class="custom-header-link">
                <template #button-content>
                  <div>
                    <span class="px-2">{{ item.title }}</span>
                    <img src="@/assets/icons/drop-down.svg">
                  </div>
                </template>
                <b-dropdown-item v-for="(child) in item.childs" :key="child.title" href="#">
                  {{ child.title }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
          </template>
          <AuthBox />
        </div>
    </b-navbar>
  </div>
</template>

<script>
import AuthBox from './AuthBox.vue'

export default {
  name: 'TheHeader',
  components: {
    AuthBox
  },
  data () {
    return {
      menu: [
        {
          title: this.$t('components.header.language'),
          id: 0,
          childs: [
            { title: 'English' , href: '#'},
            { title: 'Spanish', href: '#' }
          ]
        },
        {
          title: this.$t('components.header.currency'),
          id: 3,
          childs: [
            { title: 'USD', href: '#' },
            { title: 'SGD', href: '#' }
          ]
        }
      ]
    }
  }
}
</script>
