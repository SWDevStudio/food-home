export const state = () => ({
  cart: []
})

export const mutations = {
  ADD_CART: (state, product) => { state.cart.push(product) },
  CLEAR_CART: (state) => { state.cart = [] }
}

export const actions = {}

export const getters = {
  getCart: s => s.cart
}
