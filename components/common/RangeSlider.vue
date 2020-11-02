<template>
  <div class="range-slider">
    <p class="range-slider__name">
      {{ name }}
    </p>
    <div class="range-slider__price-range price-range">
      <div class="price-range__min">
        от
        <div class="price-range__window">
          {{ minPrice }}
        </div>
      </div>
      <div class="price-range__max">
        до
        <div class="price-range__window">
          {{ maxPrice }}
        </div>
      </div>
    </div>
    <div class="range-slider__field">
      <input
        v-model.number="minPrice"
        type="range"
        class="range-slider__input"
        min="0"
        :max="max"
        @change="$store.commit('restaurant/SET_PRICE_RANGE', {
          name: 'min',
          price: minPrice
        })"
      >
      <input
        v-model.number="maxPrice"
        type="range"
        class="range-slider__input"
        min="0"
        :max="max"
        @change="$store.commit('restaurant/SET_PRICE_RANGE', {
          name: 'max',
          price: maxPrice
        })"
      >
      <div class="slider">
        <div
          class="slider__track"
          :style="`width: ${(maxPrice-minPrice) / max * 100}%; left:calc(${minPrice/max * 100}%`"
        />
        <div class="slider__range" />
        <div
          class="slider__thumb slider__thumb-left"
          :style="`left:calc(${minPrice/max * 100}%`"
        />
        <div
          class="slider__thumb slider__thumb-right"
          :style="`left:calc(${maxPrice/max * 100}%)`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeSlider',
  props: {
    name: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      max: 0,
      minPrice: 0,
      maxPrice: 0
    }
  },
  watch: {
    minPrice () {
      if (this.minPrice >= this.maxPrice) {
        this.minPrice = this.maxPrice
      }
    },
    maxPrice () {
      if (this.maxPrice <= this.minPrice) {
        this.maxPrice = this.minPrice
      }
    }
  },
  created () {
    this.$store.getters['restaurant/getAllDishes'].forEach((item) => {
      if (Number(item.regular_price) > this.max) {
        this.max = item.regular_price
      }
    })
    this.maxPrice = this.max
  }
}
</script>

<style lang="stylus">
.range-slider {
  position relative
  font-size $size__text
  color $color__text
  font-family $font
  &__price-range {
    margin-top 12px
  }
  &__field {
    position relative
    margin-top 29px
  }
  &__input {
    width 100%
    height 2px
    position absolute
    pointer-events none
    -webkit-appearance none
    background transparent
    z-index 2
    &::-webkit-slider-thumb {
      pointer-events all
      width 18px
      height 18px
      border-radius 0
      background transparent
      outline none
      -webkit-appearance none
    }
    &::-moz-range-thumb {
      width 18px
      height 18px
      background transparent
      border none
      outline none
      border-radius none
      pointer-events all
      -moz-appearance none
    }
}
}
.price-range {
  display flex
  justify-content space-between
  align-items center
  &__min, &__max {
    display flex
    align-items center
  }
  &__window {
    padding 3px 8px
    border 1px solid $color__theme
    min-width 80px
    border-radius 5px
    margin-left 5px
  }
}
.slider {
  width calc(100% - 18px)
  height 2px
  background-color rgba(232, 66, 55, 0.2)
  border-radius 5px
  position relative
  &__thumb {
    position absolute
    width 18px
    height 18px
    border-radius 50%
    background-color $color__theme
    top -9px
    right -18px
  }
  &__track {
    position: absolute;
    width 100%
    height 100%
    background-color $color__theme
  }
}
</style>
