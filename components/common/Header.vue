<template>
  <header class="header">
    <div class="header__container container container--row">
      <n-link to="/">
        <img src="/img/general/user.svg" alt="">
      </n-link>
      <v-input
        class="header__search"
        icon="search"
        placeholder="Что вам привезти?"
      />
      <n-link v-if="geo" to="/">
        <img src="/img/general/geo-icon.svg" alt="">
      </n-link>
      <n-link v-else to="/" class="header__cart cart">
        <div
          v-if="cart"
          class="cart__count"
        >
          {{ cart }}
        </div>
        <img src="/img/general/cart.svg" alt="">
      </n-link>
    </div>
  </header>
</template>

<script>
import VInput from '~/components/form/v-input'
export default {
  name: 'Header',
  components: { VInput },
  props: {
    geo: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    cart () {
      return this.$store.getters['cart/getCart'].length
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
.cart {
  position relative
  &__count {
    position absolute
    display flex
    justify-content center
    align-items center
    background-color $color__theme
    border-radius 50%
    width 15px
    height 15px
    font-size $size__text--small
    color $color__text
    font-family $font
    right -7px
    top -5px
  }
}
</style>
