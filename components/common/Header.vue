<template>
  <header class="header">
    <div class="header__container container">
      <n-link to="/">
        <img src="/img/general/user.svg" alt="">
      </n-link>
      <v-input
        class="header__search"
        icon="search"
      />
      <n-link to="/">
        <img src="/img/general/geo-icon.svg" alt="">
      </n-link>
    </div>
  </header>
</template>

<script>
import VInput from '~/components/form/v-input'
export default {
  name: 'Header',
  components: { VInput },
  data () {
    return {
      test: ''
    }
  }
}
</script>

<style lang="stylus">
.header {
  &__container {
    display flex
    align-items center
    justify-content space-between
  }
  &__search {
    flex  1 1 auto
    margin 0 15px
  }
}
</style>
