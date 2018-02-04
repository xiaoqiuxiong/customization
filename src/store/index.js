import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

import user from './user'

const state = {
    /*高级定制选择图片*/
    imglist: [],
    /*高级定制选项*/
    gj_data: {},
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      user
    }

})

export default store