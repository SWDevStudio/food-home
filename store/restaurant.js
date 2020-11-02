export const state = () => ({
  categories: [
    {
      id: 0,
      name: 'Пицца',
      active: false
    },
    {
      id: 1,
      name: 'Суши',
      active: false
    },
    {
      id: 2,
      name: 'Бургеры',
      active: false
    }
  ],
  dishes: [],
  // TODO подключить получение данных от сюда, для RangeSlider
  priceRange: {
    min: 0,
    max: 500
  }
})

export const mutations = {
  CHANGE_FILTER: (s, id) => {
    const categories = s.categories.find(item => item.id === id)
    categories.active = !categories.active
  },
  SET_DISHES: (s, dishes) => { s.dishes = dishes },
  SET_PRICE_RANGE: (s, data) => {
    s.priceRange[data.name] = data.price
  },
  SET_CATEGORY: (s, data) => {
    console.log(123)
  }
}

export const actions = {
  async fetchDish ({ commit }) {
    const { data: dishes } = await this.$axios.get('api/product/read')
    commit('SET_DISHES', dishes.records)
  }
}

export const getters = {
  // Возвращает список продуктов ресторана, с учетом фильтров
  getDishes (s) {
    const priceRange = s.priceRange
    return s.dishes.filter((item, index) => {
      if (item.regular_price <= priceRange.max && item.regular_price >= priceRange.min) {
        return item
      }
    })
  },
  getAllDishes: s => s.dishes,
  getCategories: s => s.categories,
  getPriceRange: s => s.priceRange
}
