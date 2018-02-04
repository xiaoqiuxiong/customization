import * as func from '../function.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const state =  {
    user: {
        //用户信息
        data: func.user_local.get().data || {},
        //门店名称
        sname: func.user_local.get().sname || '',
    },
    restStatus: func.restStatus_local.get().restStatus || '',
}

export default {
    state,
    actions,
    mutations,
    getters,
}