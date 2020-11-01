<template>
  <div
    class="alert"
    :class="alertText ? 'alert--active' : ''"
  >
    {{ alertText }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    alertText () {
      return this.$store.getters['errors/getAlert']
    }
  },
  watch: {
    alertText () {
      setTimeout(() => {
        this.$store.commit('errors/SUMMON_USER_ALERT', '')
      }, 2000)
    }
  }

}
</script>

<style scoped lang="stylus">
.alert {
  position absolute
  display flex
  height 59px
  width 100%
  top: -59px
  justify-content center
  align-items center
  background-color $color__theme
  color $color__text
  z-index 2
  font-family $font
  box-shadow 0 2px 5px rgba(22, 22, 22, 0.6)
  border-radius 0 0 20px 20px
  transition top .3s ease-in-out
  &--active {
    top: 0
    transition top .3s ease-in-out
  }
}
</style>
