<template>
  <div class="select">
    <p class="select__title">
      {{ title }}
    </p>
    <p
      class="select__header"
      :class="visible?'select__header--visible':''"
      @click="visible=!visible"
    >
      <span>{{ selected }}</span>
    </p>
    <div v-if="visible" class="select__options">
      <p v-for="option in options" :key="option" @click="select(option)">
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    name: {
      type: String,
      default: () => ''
    },
    options: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      visible: false,
      selected: 'Выбрать'
    }
  },
  methods: {
    select (option) {
      this.selected = option
      this.visible = false
      this.$emit('input', option)
    }
  }
}
</script>

<style scoped lang="stylus">
selectArrow(){
  content ""
  position absolute
  width 18px
  height 9px
  background url("/img/form/select-arrow.svg") no-repeat
  background-size contain
  right 18px
}
.select {
  position relative
  width 100%
  cursor pointer
  color $color__text
  font-family $font
  font-size $size__text
  &__title {
    margin-bottom 10px
  }
  &__header {
    background-color $background__input
    margin 0
    height 40px
    display flex
    align-items center
    border-radius 5px
    border 1px solid rgba(184, 184, 184, 0.2);
    position relative
    span {
      margin-left 49px
    }
    &:before {
      content ""
      position absolute
      width 38px
      height 100%
      border-right rgba(184, 184, 184, 0.2) 1px solid
      background-image  url("/img/form/user-card.svg")
      background-repeat no-repeat
      background-position center
      background-size 15px 15px
    }
    &:after {
      selectArrow()
    }
    &--visible {
      border-bottom-right-radius 0
      border-bottom-left-radius 0
      &:after {
        selectArrow()
        transform scale(1,-1)
      }
    }
  }
  &__options {
    position absolute
    right 0
    box-sizing border-box
    width 100%
    z-index 1
    background-color $background__input
    border 1px solid rgba(184, 184, 184, 0.2);
    border-bottom-left-radius 5px
    border-bottom-right-radius 5px
    p {
      &:not(:last-child) {
        border-bottom solid 1px rgba(184, 184, 184, 0.2)
      }
      margin 0
      padding 12px 0 12px 49px
    }
  }
}

</style>
