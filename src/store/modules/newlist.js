import axios from "axios"

export default{
    namespaced: true,
    state: {
        allData:{}
        
    },
    mutations: {
        // payload存的数据是一个小对象（id，id对应的数组）
        updateList(state,{currentFenlei,list}){
            // 在新的对象后面追加了一个新的属性
            state.allData={...state.allData,[currentFenlei]:list}


        }
        
    },
    actions: {
        // 获取新闻列表数据
        // 分类id只能通过传递的方式给传进来
        async getNewlist(context,cataId){
        
           const {data:{data:{results}}}=await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${Date.now()}`)
            context.commit('updateList',{currentFenlei:cataId,list:results})
        }
        
    },
  
}