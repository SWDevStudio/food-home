export const state = () => ({
  alert: ''
})

export const mutations = {
  SUMMON_USER_ALERT: (state, value) => {
    state.alert = value
  }
}

export const actions = {}

export const getters = {
  getAlert: s => s.alert
}
