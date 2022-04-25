
import Vue from 'vue'
import Vuex from 'vuex'
import fenlei from './modules/fenlei'
import newlist from './modules/newlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    fenlei:state=>state.fenlei.fenlei,
    currentfenlei:state=>state.fenlei.currentfenlei,
    // 要么有值  要么是个空数组
    currentList:state=>state.newlist.allData[state.fenlei.currentfenlei]||[]
  },
  mutations: {
    

  },
  actions: {
   
  },
  modules: {
    newlist,
    fenlei
  }
})
