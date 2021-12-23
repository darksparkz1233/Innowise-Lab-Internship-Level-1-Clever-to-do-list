<template>
  <div class="card-wrapper" v-if="$store.getters.getCardStatus">
    <div class="card">
      <span class="menu">
        <button id="return-btn" @click="goBack()">
          <img class="arrow icon" src="./Images/left-arrow.png" alt="" />
        </button>
        <h1 class="card-header">Today's Task</h1>
      </span>

      <div class="task-wrapper">
        <!--     Task Name Edit     -->
        <input
          v-if="isEditing"
          v-model="$store.state.clickedTask.name"
          class="task-name-edit"
          type="text"
        />
        <!-- ! Task Name Default -->
        <div v-else class="task-name-default">
          {{ $store.state.clickedTask.name }}
        </div>
      </div>

      <!-- ! Task Description Edit -->
      <div class="desc-wrapper">
        <input
          v-if="isEditing"
          v-model="$store.state.clickedTask.description"
          class="desc-area-edit"
          type="text"
        />
        <!-- ! Task Description Default -->
        <div v-else class="desc-area-default">
          {{ $store.state.clickedTask.description }}
        </div>
      </div>

      <div class="bottom-menu">
        <div class="actions">
          <div class="menu-wrapper">
            <button @click="editMode()" id="edit">
              <img class="icon" src="./Images/editing.png" alt="" />
            </button>

            <button id="delete" @click="deleteTask()">
              <img class="icon" src="./Images/delete.png" alt="" />
            </button>
          </div>

          <div class="save-wrapper">
            <div id="save">
              <button @click="saveChanges()" id="save-btn">
                Save changes!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    let isEditing = ref(false);

    const goBack = () => {
      store.state.clickedTask = null;

      store.state.cardStatus
        ? (store.state.cardStatus = false)
        : (store.state.cardStatus = true);

      isEditing.value = false;
    };

    const editMode = () => {
      if (!isEditing.value) {
        isEditing.value = true;
      }
    };

    const saveChanges = () => {
      if (isEditing.value) {
        isEditing.value = false;
      }
    };

    return {
      saveChanges,
      goBack,
      editMode,
      isEditing,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Open+Sans+Condensed:wght@300&display=swap");

/*=============================================
=            Card Styles            =
=============================================*/
.card-wrapper {
  position: absolute;

  height: 70%;
  width: 100%;

  bottom: 0;
  right: 0;

  background: #fff;

  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.124);

  z-index: 2;
}

.card {
  position: relative;
  margin: 20px;
  margin: 2rem;

  font-family: "Open Sans Condensed", sans-serif;
}
/*=====  End of Card Styles  ======*/

/*=============================================
=            Top Menu            =
=============================================*/
.menu {
  display: flex;
  align-items: center;
  flex-direction: row;
}

#return-btn {
  border: none;
  background: none;

  margin-right: 1rem;
  margin-top: 7px;
  border-radius: 50%;

  width: 30px;
  height: 30px;
}

.icon {
  height: 22px;
  cursor: pointer;
}

.arrow {
  height: 15px;
}
/*=====  End of Top Menu  ======*/

/*=============================================
=            Task Content            =
=============================================*/
.task-wrapper {
  display: flex;
  flex-direction: row;

  margin-top: 2rem;
}
/* ! Edit Mode for Task Name */
.task-name-edit {
  background: rgba(128, 128, 128, 0.186);

  border: none;
  border-radius: 7px;

  padding: 2px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 23px;
}
/* ! Default styles for Task Name */
.task-name-default {
  font-size: 23px;
}

/* Edit Mode for Description  */
.desc-area-edit {
  background: rgba(128, 128, 128, 0.186);
  color: gray;

  border-radius: 7px;
  border: none;

  font-size: 20px;
  text-align: center;

  width: 95%;
  min-height: 320px;

  margin-top: 1.5rem;
  margin-left: 1rem;

  padding: 10px 0 0 15px;
}

/* Default styles for Description */
.desc-area-default {
  background: rgba(128, 128, 128, 0.186);
  color: gray;

  border-radius: 7px;
  border: none;

  font-size: 20px;
  text-align: left;

  width: auto;
  min-height: 320px;

  margin-top: 1.5rem;
  margin-left: 1rem;

  padding: 10px 0 0 15px;
}
/*=====  End of Task Content  ======*/

/*=============================================
=            Bottom Menu Actions            =
=============================================*/
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2.5rem;
}
#delete,
#edit {
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.131);
  padding: 5px;
}
.menu-wrapper {
  display: flex;
}

.save-wrapper {
  display: flex;
}

#save {
  display: flex;
  justify-content: center;
}

#save-btn {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 17px;
  font-weight: bold;

  cursor: pointer;

  border: none;
  background: rgba(16, 175, 16, 0.301);
  color: rgb(47, 128, 44);

  border-radius: 5px;

  width: 6rem;
  padding: 5px;
}
/*=====  End of Bottom Menu Actions  ======*/
</style>
