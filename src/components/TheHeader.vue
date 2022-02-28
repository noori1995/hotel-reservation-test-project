<template>
  <div class="header bg-white w-100 p-0 m-0">
    <div class="frame frame-lg">
      <b-navbar class=" px-0 d-flex flex-row justify-content-between" >
        <b-navbar-brand href="#">
          <img src="@/assets/logo.png" width="227px" alt="cloud travel logo" />
        </b-navbar-brand>
        <!-- desktop only -->
        <div class="flex-row d-none d-lg-flex">
          <template v-for="(item, index) in menu">
              <b-nav-item-dropdown :key="index" no-caret toggle-class="custom-header-link">
                <template #button-content>
                  <div>
                    <span class="px-1">{{ item.childs.find(el => el.selected).title }}</span>
                    <img src="@/static/icons/drop-down.svg">
                  </div>
                </template>
                <b-dropdown-item v-for="(child) in item.childs" :key="child.title" href="#">
                  {{ child.title }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
          </template>
          <AuthBox />
        </div>
        <!-- desktop only -->
        <!-- mobile only -->
        <div class="d-flex d-lg-none">
          <img src="@/static/icons/humberger.svg" />
        </div>
        <!-- mobile only -->
    </b-navbar>
    </div>
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
            { title: 'English' , href: '#', selected: true},
            { title: 'Spanish', href: '#', selected: false}
          ]
        },
        {
          title: this.$t('components.header.currency'),
          id: 1,
          childs: [
            { title: 'USD', href: '#', selected: true },
            { title: 'SGD', href: '#', selected: false }
          ]
        }
      ]
    }
  }
}
</script>
