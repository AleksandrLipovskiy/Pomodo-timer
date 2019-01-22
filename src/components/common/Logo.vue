<template>
  <router-link to="/">
    <img class="logo" :src="src" alt="PomodoroTimer">
  </router-link>
</template>

<script>
import router from '@/router'

export default {
	data () {
    return {
      src: require('@/assets/profitoro_logo.svg')
    }
  },

  router
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/main";

.logo {
  max-width: 100px;
  
  @include media-breakpoint-down(md) {
    max-width: 80px;
  }
}
</style>
