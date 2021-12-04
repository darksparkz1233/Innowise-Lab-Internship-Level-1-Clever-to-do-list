/* eslint-disable no-undef */
import { createStore } from 'vuex'

export default createStore({
  //
  // ─── STATE ──────────────────────────────────────────────────────────────────────
  //
  state: () => {
    return {
      cardStatus: false,
      clickedCard: null,

      cardVisible: true,
      taskArr: [
        'Walk', 'Survive'
      ]
    }
  },
  // ────────────────────────────────────────────────────────────────────────────────

// ANCHOR asdsdadddddddddd
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

