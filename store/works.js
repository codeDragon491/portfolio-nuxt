import WorkService from '~/services/WorkService.js'
export const state = () => ({
    works: [],
    work: {}
})
export const mutations = {
    SET_WORKS(state, works) {
        state.works = works
    },
    SET_WORK(state, work) {
        state.work = work
    }
}
export const actions = {
    fetchWorks({ commit }) {
        return WorkService.getWorks().then((response) => {
            commit('SET_WORKS', response.data)
        })
    },
    fetchWork({ commit }, id) {
        return WorkService.getWork(id).then((response) => {
            commit('SET_WORK', response.data)
        })
    }
}