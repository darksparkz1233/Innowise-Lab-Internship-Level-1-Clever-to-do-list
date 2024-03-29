<template>
  <div class="task-wrapper">
    <p id="task-counter">Tasks Today: {{ currDay.tasks.length }}</p>
    <div class="task-counter-wrapper">
      <!-- ? Render if there are no tasks available: -->
      <div class="empty-msg" v-if="currDay.tasks.length == 0">
        <p>Start by adding a New Task!</p>
      </div>

      <div class="task-list" v-for="(task, idx) in currDay.tasks" :key="idx">
        <div class="list-item">
          <div class="container" :class="{ done: task.status }">
          <!-- ? Task Checkbox -->
            <input
              @change="changeDotStatus(task)"
              v-model="task.status"
              class="list-checkbox"
              type="checkbox"
            />
            {{ task.name }}
          </div>

          <!-- ? Edit Task Icon -->
          <div class="item-actions">
            <button class="edit-item btn" @click="popupWindow(task)">
              <img class="icon" src="./Images/editing.png" />
            </button>
          <!-- ? Delete Task Icon -->
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
import { onMounted, ref, emit, computed, onUnmounted } from "vue";

import { 
  getFirestore, 
  orderBy,
  collection,
  doc,
  addDoc, 
  setDoc,
  deleteDoc,
  updateDoc, 
  getDoc,
  onSnapshot,
  DocumentSnapshot,
  getDocs,
  deleteField,
  
} from 'firebase/firestore'
import { firebaseApp } from '../firebase';
import { signInAnonymously } from '@firebase/auth';

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
    displayDotStatus: {
      type: Boolean,
      default: () => true,
    },
  },

  setup(props) {
    // ? Firebase store: 
    const firestore = getFirestore()
    const calendar = doc(firestore, 'calendar/days')
    // ? Vuex store:
    const store = useStore();
    const dayArrData = ref(props.dayArr);

    const currTasks = dayArrData.value.find ((el) => {
      return el.id === props.currDay.id;
    });

    const currDay = ref(props.currDay)
    const dotStatus = ref(props.displayDotStatus);
    
    // TODO: Make a status for the checked checkbox
    const isActiveDot = ref(props.dotStatus);
  
    // TODO: Create a pop-up window when the task is clicked:
    const popupWindow = (item) => {
      store.state.clickedTask = item;
      store.state.cardStatus
        ? (store.state.cardStatus = false)
        : (store.state.cardStatus = true);
    };
    // TODO: Delete task function:
    const deleteItem = (idx, taskID) => {
      const currTasks = dayArrData.value.find ((el) => {
        return el.id === props.currDay.id;
      });
      currTasks.tasks.splice(idx, 1);

      taskCollection
      .doc(taskID)
        .get()
          .then(
            doc => {
            if(doc.exists) {
              doc.ref.delete().then(() => {
                console.log('Deleted successfully');
              })
            }
            else { console.log('No such document!')}
          }
      )
      
    };
    console.log(currDay.value);

    const taskCollection = collection(firestore, 'tasks')

    function listenToADocument() {
      onSnapshot(calendar, docSnapshot => {
        if(docSnapshot.exists()) {
          const docData = docSnapshot.data()
          console.log(`In realtime, docData : ${ JSON.stringify(docData) }`)
        }
      })
    } 
    listenToADocument()
    
    // TODO: Get tasks:
    const tasks = ref(currTasks)

    const getTasks = 
      onSnapshot(taskCollection, snapshot => {
        console.log(snapshot.docs);
        tasks.value = snapshot.docs
      })
      console.log(dayArrData.value);

    // TODO: Add item function:
    const addItem = () => {
      // ? select the clicked day:
      const currTasks = dayArrData.value.find((el) => {
        console.log(el);
        return el.id === props.currDay.id;
      });
      // ? default data for the task
      const taskData = {
        name: 'Empty task',
        description: 'No description',
        status: false,
        creationTime: Date.now()
      }
      // push the taskData object to the selected day above:
      currTasks.tasks.push({ taskData });
    };


    // TODO: Once the task is clicked, change the dot status in Calendar.vue
    const changeDotStatus = (task) => {
      task.status ? task.status === false : task.status === true;

      task.status
        ? (store.state.dotStatusTransfer = true)
        : (store.state.dotStatusTransfer = false);
    };

    onUnmounted(() => {
      getTasks()

    })
    return {
      popupWindow,
      deleteItem,
      addItem,
      dayArrData,
      isActiveDot,
      changeDotStatus,
      dotStatus,
      getTasks,
      tasks,
      currTasks,
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

.container {
  transition: 0.5s;
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

.done {
  transition: 0.5s;
  text-decoration: line-through;
  color: rgb(69, 167, 69);
}
</style>
