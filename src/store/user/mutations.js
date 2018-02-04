import * as func from '../function';

export default {
    SAVEUSER(states, data) {
        //用户信息
        states.user.data = data.result
        //门店名称
        states.user.sname = data.sname
        func.user_local.set(states.user)
    },
    SAVERESTSTATUS(states, data) {
        states.restStatus = data
        func.restStatus_local.set(states.restStatus)
    },
}