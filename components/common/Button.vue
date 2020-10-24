<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'

}
</script>

<style lang="stylus">
.button {
  width 100%
  background-color $color__theme
  height 36px
  color $color__text
  font-family $font
  border none
  border-radius: 5px
  &:disabled  {
    background-color $color__theme--disable
  }
}
</style>
