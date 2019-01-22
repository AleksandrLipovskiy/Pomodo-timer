<template>
  <div class="landingPage">
    
    <header-component></header-component>

    <div class="container row justify-content-center align-items-center">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <authentication></authentication>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <go-to-app-link></go-to-app-link>
      </div>  
    </div>

    <footer-component></footer-component>

  </div>
</template>

<script>
import { Authentication, GoToAppLink } from './landing'
import { HeaderComponent, FooterComponent } from './common'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Authentication,
    GoToAppLink
  }
}
</script>
<style scoped lang="scss">
@import "../assets/styles/main";

.landingPage {
  min-height: 100vh;
  background-color: $color-grey-lightest;
  .container {
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>