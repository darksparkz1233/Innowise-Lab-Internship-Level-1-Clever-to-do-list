<template>
  <div class="wrapper">
    <div class="calendar-wrapper">
      <div class="calendar-row" v-for="(day, idx) in dayArr" :key="idx">
        <div
          id="card"
          class="day-card"
          :class="{ active: activeDay === idx + 1 }"
          @click="switchDay(idx, day)"
        >
          <div class="card-info">
            <p class="name">{{ day.dayOfWeek }}</p>
            <p class="day">
              {{ day.currDay }}
            </p>
          </div>
          <div class="dot-wrapper">
            <div class="dot dotActive" />

            <div 
              v-if="contatinsTasks" 
              class="dot"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { 
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'

import { useStore } from "vuex";
import { ref, emit, onMounted } from "vue";
import { calendarFormat } from 'moment';

export default {
  props: {
    dayArr: {
      type: Array,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    // ? Firebase store:
    const firestore = getFirestore()
    // ? Vuex store:
    const store = useStore()
    const moment = require("moment");

    const containsTasks = store.state.dotStatusTransfer

    const activeDay = ref(1);

    // TODO: Get the remaining month days starting from today:
    const daysRemainingThisMonth = moment()
      .endOf("month")
      .diff(moment(), "days");

    // TODO: Turn the remaining days into an array
    const switchDay = (idx, day) => {
      activeDay.value = idx + 1;
      emit("updateCurrDay", day);
    };

    return {
      daysRemainingThisMonth,
      switchDay,
      activeDay,
      containsTasks
    };
  },
};
</script>

<style scoped>
/* Fonts: */
@import url("https://fonts.googleapis.com/css2?family=BenchNine:wght@700&display=swap");
.wrapper {
  overflow: hidden;
}
.calendar-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow-x: scroll;

  margin-left: 2rem;
}

.calendar-row {
  display: flex;
  align-items: center;

  width: 100%;
  height: 5rem;

  background-color: rgb(255, 255, 255);
}
.day-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-width: 4rem;
  height: 4.5rem;

  margin-right: 1rem;

  text-align: center;
  font-family: "BenchNine", sans-serif;
  font-size: 20px;

  color: #000;

  cursor: pointer;

  box-shadow: 5px 5px 10px rgba(92, 92, 92, 0.301);
  border-radius: 14px;
}
.active {
  transition: 0.3s;
  color: #fff;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.672);
  background-color: rgb(0, 0, 0);
}

.card-info {
  display: flex;
  flex-direction: column;
}

.dot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 5px;
}

.dot {
  width: 5px;
  height: 5px;

  margin-right: 5px;

  box-shadow: 0px 0px 10px 2px rgba(138, 20, 197, 0.227);

  border-radius: 50%;
  border: 1px solid rgb(138, 20, 197); 
}
/* ! Dot Status: */
.dotActive {
  width: 5px;
  height: 5px;

  margin-right: 5px;

  box-shadow: 0px 0px 10px 2px rgba(138, 20, 197, 0.227);

  border-radius: 50%;
  background: rgb(138, 20, 197); 
}
</style>
