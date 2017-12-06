import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count:{}
  },
  actions: {
    increment (context,data) {//传过来的数据 context相当于store,data是传过来的数据
      context.commit('increment',data);//提交给下一个流程
      // console.log(context)
    }
  },
  mutations: {
    increment (state,data) {//接收上一个流程 并且可以在此步进行操作。比如递增，递减，赋值
      // state.count++;
      // console.log(localStorage.getItem("lngssss"));
      state.count=data;
      if(localStorage.getItem("lngssss")==null){
      	localStorage.setItem("lngssss", JSON.stringify(state.count))
      }else if(state.count != JSON.parse(localStorage.getItem("lngssss"))){
      	localStorage.setItem("lngssss", JSON.stringify(state.count))
      }
      
    }
  },
  getters: {
  // ...
  doneTodosCount: (state, getters) => {//接收上一个流程 并且return出去 让其他所有组件 都有资格取
    return state.count;
  }
}
})

export default store;