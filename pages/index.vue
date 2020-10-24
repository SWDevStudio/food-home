<template>
  <div class="main container">
    <div class="main__line">
      <div
        v-for="(item, key) in topMenu"
        :key="key"
        class="main__block square"
        :class="item.mode ? item.mode : ''"
      >
        <div class="square__img">
          <img
            class=""
            :src="item.img"
            alt=""
          >
        </div>
        <span
          class="square__text"
        >
          {{ item.text }}
        </span>
      </div>
    </div>
    <div class="main__line">
      <div
        v-for="(item, key) in bottomMenu"
        :key="key"
        class="main__block square"
        :class="item.mode ? item.mode : ''"
      >
        <div class="square__img">
          <img
            class=""
            :src="item.img"
            alt=""
          >
        </div>
        <span
          class="square__text"
        >
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '~/components/form/v-input'
import topMenu from '~/data/topMenu'
import bottomMenu from '~/data/bottomMenu'
import Button from '~/components/common/Button'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Button, VInput },
  data () {
    return {
      topMenu,
      bottomMenu
    }
  }
}
</script>

<style lang="stylus">
.main {
  background-image url("/img/main/main-logo.svg")
  background-repeat no-repeat
  background-position center
  margin 30px auto
  &__line {
    display flex
    justify-content space-around
    height 205px
    align-items center
    max-width 260px
    margin 0 auto
  }
  &__block {
    &--top {
      align-self flex-start
    }
    &--bottom {
      align-self flex-end
    }
  }
}
.square {
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  box-sizing border-box
  width 87px
  height 87px
  &:before {
    content ""
    position absolute
    transform rotate(45deg)
    width 100%
    height 100%
    top 0
    border $color__theme 2px solid
    border-radius 10px
  }
  &__text {
    margin-top 6px
    font-family $font
    color: $color__text--sad
    text-align center
    font-size $size__text--small
  }
  &__img {
    width 28px
    height 28px
    img {
      width 100%
      height auto
    }
  }

}
</style>
