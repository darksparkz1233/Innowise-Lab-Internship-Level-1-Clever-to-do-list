/* eslint-disable no-undef */
import { createStore } from 'vuex'

export default createStore({
  state: () => {
    return {
      cardStatus: false,
      clickedCard: null,

      cardVisible: true,
      taskArr: [
        
      ]
    }
  },
  getters: {
   getCardStatus(state) {
     return state.cardStatus
   },
   getTaskArray(state) {
     return state.taskArr
   },
   
  },
  mutations: {
    toggleCard(state) {
      if(!state.cardStatus) {
        state.cardStatus = true
      }
      else if(state.cardStatus) {
        state.cardStatus = false
      }


    },

    addItem(state) {
      state.taskArr.push('Empty Task')
    },
  
    deleteItem(state, idx) {
      state.taskArr.splice(idx, 1)
    },

  },





  actions: {

},
  modules: {
    
  }
})
