import axios from 'axios'
export default{
    namespaced: true,
    state: {
        fenlei:[],
        currentfenlei:''
        
    },
    mutations: {
        updateFenlei(state,payload){
            state.fenlei=payload
          },
          updateCurrentFenlei(state,payload){
            state.currentfenlei=payload
          }
        
    },

    actions: {
        async getFenlei(context){
            const {data:{data:{channels}}}=await axios.get('http://toutiao.itheima.net/v1_0/channels')
            context.commit('updateFenlei',channels)
            context.commit('updateCurrentFenlei',channels[0].id)
          }
        
    } 

}
