<template>
  <div>Active card: {{ currDay }}</div>
  <hr />
  <div>Current Task is: {{ currDay.dayOfWeek }}</div>
  <div class="task-wrapper">
    <p id="task-counter">Tasks Today: {{ currDay.tasks.length }}</p>
    <div class="task-counter-wrapper">
      <!-- ? Render if there are no tasks available: -->
      <div class="empty-msg" v-if="currDay.tasks.length == 0">
        <p>Start by adding a New Task!</p>
      </div>

      <div class="task-list" v-for="(task, idx) in currDay.tasks" :key="idx">
        <div class="list-item">
          <div class="container">
            <input class="list-checkbox" type="checkbox" />
              {{ task.name }}
          </div>

          <div class="item-actions">
            <button class="edit-item btn" @click="getClickedTask(task)">
              <img class="icon" src="./Images/editing.png" />
            </button>

            <button class="delete-item btn" @click="deleteItem(idx)">
              <img class="icon" src="./Images/delete.png" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="item-card">
      <ItemCard />
    </div>

    <div class="add-task-wrapper">
      <button id="add-task-btn" @click="addItem()">+ Add a new task</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import ItemCard from "./ItemCard.vue";
import { useStore } from "vuex";
import { onMounted, ref, emit } from "vue";
// import { computed } from '@vue/reactivity'

export default {
  components: {
    ItemCard,
  },

  props: {
    dayArr: {
      type: Array,
      default: () => [],
    },
    currDay: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const store = useStore();

    const dayArrData = ref(props.dayArr);
    const currDay = ref(props.currDay);

    const getClickedTask = (item) => {
      store.state.clickedTask = item;

      store.state.cardStatus
        ? (store.state.cardStatus = false)
        : (store.state.cardStatus = true);
    };
    // ! Delete Item:
    const deleteItem = (idx) => {
      currDay.value.tasks.splice(idx, 1);
    };

    const currTasks = dayArrData.value.find((el) => {
      return el == props.currDay.id
    })

  
    const addItem = () => {
      currTasks.tasks.push({
        name: "Empty Task" + Math.random().toString().substring(0, 4),
        description: "No description...",
      });
 
    };


    console.log(currDay.value);
    onMounted(() => {});
    

    return {
      getClickedTask,
      deleteItem,
      addItem,
      dayArrData,
    };
  },
};
</script>

<style scoped>
/* Fonts: */
@import url("https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Open+Sans+Condensed:wght@300&display=swap");

.empty-msg {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 15rem;

  color: rgba(80, 80, 80, 0.433);
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 25px;
  font-weight: bold;
}
.task-wrapper {
  margin-top: 5rem;
  margin-left: 2rem;
}
.task-counter-wrapper {
  overflow-x: scroll;
  max-height: 20rem;
}
.task-list {
  display: flex;

  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bold;
  font-size: 20px;

  list-style: none;

  color: rgb(44, 44, 44);

  margin-left: 2rem;
  margin-top: 1rem;
}

#task-counter {
  font-family: "BenchNine", sans-serif;
  font-size: 2rem;
}

.list-item {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}
.item-actions {
  display: flex;
}

.btn {
  height: 20px;
  width: 20px;

  margin-left: 1rem;

  border: none;
  background: none;
}
.icon {
  height: 25px;
  cursor: pointer;
}

.add-task-wrapper {
  position: absolute;

  display: flex;
  justify-content: center;

  width: 100%;

  margin-bottom: 2rem;

  bottom: 0;
  right: 0;
}
#add-task-btn {
  border: none;
  border-radius: 10px;

  padding: 10px 50px 10px 50px;

  color: #fff;
  font-size: 18px;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bold;

  background: rgb(105, 1, 252);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.44);
}
#add-task-btn:hover {
  transition: 0.5s;
  background: rgb(0, 0, 0);
}
</style>
