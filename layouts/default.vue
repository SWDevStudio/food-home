<template>
  <div class="app">
    <Header class="app__header" />
    <Nuxt class="app__content" />
    <v-footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header'
import VFooter from '~/components/common/Footer'
export default {
  components: { VFooter, Header }
}
</script>
<style lang="stylus">
.app {
  width: 100vw;
  height: 100vh;
  background-color: $background__color;
  &__header {
    padding-top 15px
  }
}
</style>
