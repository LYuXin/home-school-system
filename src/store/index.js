import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import news from './modules/news'
// import comment from './modules/comment'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user,
    news
  }
})

export default store
