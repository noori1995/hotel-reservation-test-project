<template>
  <div >
    <div v-if="!isLoggedIn">
      <LoginForm />
      <RegisterForm />
    </div>
    <div v-else>
      <ProfileBox />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import ProfileBox from './ProfileBox.vue'

export default {
  name: 'AuthBox',

  components: {
    LoginForm,
    RegisterForm,
    ProfileBox
  },
  
  data() {
    return {
      isLoggedIn: true
    }
  }
}
</script>
