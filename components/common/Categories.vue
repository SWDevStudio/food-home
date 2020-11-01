<template>
  <div class="filters">
    <div
      v-for="(item, key) in filtersItem"
      :key="key"
      class="filters__item"
      :class="item.active ? 'filters__item--active' :''"
      @click="$store.commit('restaurant/CHANGE_FILTER', item.id)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  computed: {
    filtersItem () {
      return this.$store.getters['restaurant/getCategories']
    }
  }
}
</script>

<style lang="stylus">
.filters {
  display flex
  flex-wrap wrap
  &__item {
    font-family $font
    font-size $size__text
    color $color__text
    padding 4px 14px
    border #363636 1px solid
    margin-right 7px
    border-radius 4px
    cursor: pointer;
    transition .15s border
    margin-bottom 15px
    &:hover {
      transition .15s border
      border $color__theme 1px solid
    }
    &--active {
      transition .15s border
      border $color__theme 1px solid
    }
  }
}
</style>
