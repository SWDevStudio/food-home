<template>
  <div class="dish-item">
    <div class="dish-item__image">
      <img
        :src="dish.image_url | emptyImage "
        alt=""
      >
    </div>
    <div class="dish-item__info">
      <h5 class="dish-item__name">
        {{ dish.name }}
      </h5>
      <div class="dish-item__description">
        {{ dish.description }}
      </div>
      <div class="dish-item__weight">
        {{ dish.weight }}
      </div>
      <div class="dish-item__price">
        {{ dish.regular_price }} грн
      </div>
    </div>
    <div class="dish-item__arrow">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 3.5C0.223858 3.5 0 3.72386 0 4C0 4.27614 0.223858 4.5 0.5 4.5V3.5ZM9.35338 4.35355C9.54864 4.15829 9.54864 3.84171 9.35338 3.64645L6.17139 0.464466C5.97613 0.269204 5.65955 0.269204 5.46429 0.464466C5.26903 0.659728 5.26903 0.976311 5.46429 1.17157L8.29272 4L5.46429 6.82843C5.26903 7.02369 5.26903 7.34027 5.46429 7.53553C5.65955 7.7308 5.97613 7.7308 6.17139 7.53553L9.35338 4.35355ZM0.5 4.5H8.99982V3.5H0.5V4.5Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DishItem',
  filters: {
    emptyImage (url) {
      return url || '/img/temp/pizza.png'
    }
  },
  props: {
    dish: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus">
boldText(){
  font-size $size__text
  line-height 20px
  font-weight 500
}
.dish-item {
  position relative
  font-family $font
  color $color__text
  background-color $background__input
  display flex
  padding 13px 5px
  border-radius 5px
  width 100%
  //max-width 288px
  box-sizing border-box
  &__image {
    max-width 110px
    max-height 111px
    margin-right 10px
    img {
      width 100%
      height:100%
    }
  }
  &__info {
    display flex
    flex-direction column
  }
  &__name {
    boldText()
    margin-top 0
    margin-bottom 10px
  }
  &__description, &__weight {
    line-height 15px
    font-size $size__text--small
    margin-bottom 5px
  }
  &__price {
    boldText()
    color $color__theme
    margin-top auto
  }
  &__arrow {
    position absolute
    width 18px
    height: 18px
    background-color $color__theme
    border-radius 50%
    box-shadow: 0 2px 5px rgba(22, 22, 22, 0.6);
    display flex
    justify-content center
    align-items center
    right 13px
    bottom 13px
  }
}
</style>
