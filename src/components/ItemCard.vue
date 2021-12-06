<template>
  <div 
    class="card-wrapper"
    v-if="$store.getters.getCardStatus"
  >
      <div class="card">
          <span class="menu">
                <button
                    id="return-btn"
                    @click="goBack()"
                >
    
                    <img class="arrow icon" src="./Images/left-arrow.png" alt="">
                </button>                  
                <h1 class="card-header">Today's Task</h1>
          </span>

            <div class="task">
                <input class="task-checkbox" type="checkbox">
                <!--     Clicked Task Name:     -->
                <input
                    v-model="$store.state.clickedTask.name"
                    type="text"
                >  
                
                
            </div>

            <div>  
                <input
                    class="desc-area"
                    type="text"
                    v-model="$store.state.clickedTask.description" /> 
                
            </div>

            <div class="bottom-menu">
                <div class="actions">
                    <div class="menu-wrapper">
                        <button
                            @click="editItem()"
                            id="edit"
                        >
                            <img class="icon" src="./Images/editing.png" alt="">
                        </button>

                        <button
                            id="delete"
                            @click="deleteTask()"
                        >
                            <img class="icon" src="./Images/delete.png" alt="">
                        </button>
                    </div>

                    <div class="save-wrapper">
                        <div id="save">
                            <button id="save-btn">
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
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const goBack = () => {
            store.state.clickedTask = null

            store.state.cardStatus ?
                store.state.cardStatus = false 
                :
                store.state.cardStatus = true
        }
        
        const deleteTask = () => {
            
        }

        return {
            goBack
        }
    }


}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Open+Sans+Condensed:wght@300&display=swap');
.card-wrapper {
    position: absolute;

    height: 70%;
    width: 100%;

    bottom: 0;
    right: 0;

    background: #fff;

    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.303);


    z-index: 2;
}
.card {
    position: relative;
    margin: 20px;
    margin: 2rem;

    font-family: 'Open Sans Condensed', sans-serif;

}
.task {
    font-size: 25px;
    margin-top: 3.5rem;
}
.desc-area {
    background: rgba(128, 128, 128, 0.186);
    color: gray;
    border-radius: 7px;

    font-size: 20px;

    width: auto;
    min-height: 330px;

    margin-top: 1.5rem;
    margin-left: 1rem;
}
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
} .arrow {
    height: 15px;
}
.actions {    
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    margin-top: 2.5rem;
}
#delete, #edit {
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.131);
    padding: 5px;
}
.menu-wrapper {
    display: flex;

}

#save {
    display: flex;
    justify-content: center;
} #save-btn {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 17px;
    font-weight: bold;

    background: rgba(16, 175, 16, 0.301);
    color: rgb(47, 128, 44);

    border-radius: 5px;

    width: 6rem;
    padding: 5px;
    border: none;
}
.save-wrapper {
    display: flex;
}

</style>