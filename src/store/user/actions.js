export default {
    save_user: ({ commit }, param) => commit('SAVEUSER',param),
    save_restStatus: ({ commit }, param) => commit('SAVERESTSTATUS',param)
}