<template>
  <div class="mainPage">
    <header-component></header-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from './common'
import { ContentComponent } from './main'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ContentComponent
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/main";

.mainPage {
  background-color: $color-grey-lightest;
}
</style>
