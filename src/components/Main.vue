<template>
  <div id="main">
    <!-- ! Top Level: -->
    <div class="auth"></div>

    <div class="greeting-block">
      <button @click="signOutUser">Sign Out</button>
      <h1 id="greet-user">{{ user?.email }}</h1>
    </div>

    <div class="header-container">
      <Header />
      <Menu />
    </div>

    <div class="calendar-display">
      <Calendar 
          :dayArr="dayArr"
          @updateCurrDay="updateCurrDay"
      /> 
    </div>

    <div class="task-list">
      <TaskView 
          v-if="dayArr.length"
          :dayArr="dayArr"
          :currDay="currDay" 
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ? UI Components:
import Header from "./Header.vue";
import Calendar from "./Calendar.vue";
import Menu from "./Menu.vue";
import TaskView from "./TaskView.vue";
// ? Auth components:
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Auth from "../Auth.vue";
// ? Firebase:
import { getAuth } from "@firebase/auth";
import { signOut } from "@firebase/auth";
import { useAuthState } from "../firebase";
// ? Router:
import { useRouter } from "vue-router";
// ? Store:
import { useStore } from "vuex";
// ? ref():
import { ref, onMounted } from "vue";

export default {
  components: {
    Header,
    Calendar,
    Menu,
    TaskView,
    Login,
    Register,
    Auth,
  },
  name: "Home",

  setup() {
    // Create days:
    const currDay = ref({});
    const dayArr = ref([]);

    // Just a library for working with dates:
    const moment = require("moment");
    const daysRemainingThisMonth = moment()
      .endOf("month")
      .diff(moment(), "days");
    /*=============================================
        =            Firebase            =
    =============================================*/
    const { user } = useAuthState();
    const auth = getAuth();

    const router = useRouter();
    const signOutUser = async () => {
      try {
        await signOut(auth);
        router.push("/auth");
      } catch (e) {
        alert(e.message);
      }
    };
    /*=====  End of Firebase  ======*/
    const store = useStore();

// Generate the day data:
    const fillDayArray = () => {
      dayArr.value = Array(daysRemainingThisMonth)
        .fill("")
        .map((item, index) => {
          return {
            currDay: moment().add(index, "day").format("D"),
            dayOfWeek: moment().add(index, "day").format("dddd"),
            tasks: [ ],
            id: Math.floor(Math.random() * new Date()),
          };
        });
      currDay.value = dayArr.value[0];
    };

    const updateCurrDay = (value) => {
      currDay.value = value;
    };

    onMounted(() => {
      fillDayArray();
    });

    return {
      user,
      signOutUser,
      dayArr,
      updateCurrDay,
      currDay,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: rgb(255, 255, 255);
}

.header-container {
  display: flex;
  justify-content: space-between;

  margin: 2rem 0 3rem 2rem;
}
#logo {
  height: 3rem;
}
#greet-user {
  font-size: 15px;
}
.greeting-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */

  margin-left: 2rem;
}
</style>
