import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js'

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
})

const state = {
  addressData: [],
  checkAddress: '请选择面试地址',
  checkAddressLocation: {}
}

const mutations = {
  upAddress (state, payload) {
    state.addressData = payload
  },
  checkAddress (state, payload) {
    state.checkAddress = payload.address
    state.checkAddressLocation = payload.location
  }
}

const actions = {
  getSuggestion ({ commit }, payload) {
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res => {
        commit('upAddress', res.data)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}