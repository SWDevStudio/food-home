<template>
  <div class="app">
    <Alert />
    <Header class="app__header" />
    <Nuxt class="app__content" />
  </div>
</template>

<script>
import Alert from '@/components/common/Alert'
import Header from '~/components/common/Header'

export default {
  components: { Alert, Header }
}
</script>
<style lang="stylus">
.app {
  min-height 100vh
  display flex
  flex-direction column
  background-color: $background__color;
  &__header {
    padding-top 15px
  }
  &__footer {
    flex 1 1 auto
  }
}
</style>
