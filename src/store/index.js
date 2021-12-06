/* eslint-disable no-undef */
import { createStore } from 'vuex'

export default createStore({
  //
  // ─── STATE ──────────────────────────────────────────────────────────────────────
  //
  state: () => {
    return {
      cardStatus: false,

      clickedTask: null,

      cardVisible: true,
      taskArr: [ ]
    }
  },
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── GETTERS ────────────────────────────────────────────────────────────────────
  //
  getters: {
   getCardStatus(state) {
     return state.cardStatus
   },
   getTaskArray(state) {
     return state.taskArr
   },
   
  },
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── MUTATIONS ──────────────────────────────────────────────────────────────────
  //
  mutations: {
    toggleCard(state) {
      state.cardStatus ?
        state.cardStatus = false 
        :
        state.cardStatus = true
    },

    addItem(state) {
      state.taskArr.push(
        { 
          name: 'Empty Task' + Math.random().toString().substring(0, 4), 
          description: 'No description...' 
        } 
    
      
      )

    },
  },
  // ────────────────────────────────────────────────────────────────────────────────


//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//
  actions: {

},
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── MODULES ────────────────────────────────────────────────────────────────────
//
  modules: {
    
  }
})
// ────────────────────────────────────────────────────────────────────────────────

