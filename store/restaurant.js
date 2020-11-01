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
  priceRange: {
    min: null,
    max: null
  }
})

export const mutations = {
  CHANGE_FILTER (s, id) {
    const categories = s.categories.find(item => item.id === id)
    categories.active = !categories.active
  },
  SET_DISHES: (s, dishes) => { s.dishes = dishes },
  SET_PRICE_RANGE: (s, data) => {
    s.priceRange[data.name] = data.price
  }
}

export const actions = {
  async fetchDish ({ commit }) {
    const { data: dishes } = await this.$axios.get('api/product/read')
    // const cloneDish = []
    // for (let i = 0; i < 10; i++) {
    //   cloneDish.push(dishes.records[0])
    // }
    commit('SET_DISHES', dishes.records)
  }
}

export const getters = {
  getCategories: s => s.categories,
  getDishes: s => s.dishes
}
