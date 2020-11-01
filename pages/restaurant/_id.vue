<template>
  <div class="restaurant">
    <div class="restaurant__container container">
      <Filters
        class="restaurant__filters"
        :filters="['Пицца', 'Суши', 'Бургеры']"
      />
      <RangeSlider
        :max="100"
        name="Цена"
        class="restaurant__range-slider"
      />
      <div class="restaurant__dishes">
        <dish-item
          v-for="(dish, key) in dishes"
          :key="key"
          :dish="dish"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/common/Categories'
import RangeSlider from '@/components/common/RangeSlider'
import DishItem from '@/components/restaurant/DishItem'
export default {
  name: 'Id',
  components: { DishItem, RangeSlider, Filters },
  async fetch ({ store }) {
    return await Promise.all([
      store.dispatch('restaurant/fetchDish')
    ])
  },
  computed: {
    dishes () {
      return this.$store.getters['restaurant/getDishes']
    }
  }
}
</script>

<style lang="stylus">
.restaurant {
  &__filters {
    margin-top 29px
  }
  &__dishes {
    margin-top 28px
    display grid
    grid-column-gap 10px
    grid-row-gap 13px
    @media (min-width $sm) {
      grid-template-columns repeat(2, 1fr)
    }
  }
}
</style>
