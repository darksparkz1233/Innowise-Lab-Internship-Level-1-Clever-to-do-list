<template>
    <div class="task-wrapper">
        <p id="task-counter"> Tasks Today: {{  taskArr.length  }} </p>
        <div class="task-counter-wrapper">                 
            <!-- ? Render if there are no tasks available: -->
            <div class="empty-msg"
                 v-if="taskArr.length == 0"
            >
                <p>Start by adding a New Task!</p>
            </div>

            <div class="task-list" 
                 v-for="(task, idx) in taskArr"
                 :key="idx"
            >
                <div class="list-item">
                    <div class="container">
                        <input class="list-checkbox" type="checkbox">
                        ({{ idx + 1}}) {{ task.name}}
                    </div>

                    <div class="item-actions">
                        <button class="edit-item btn"
                                v-on:click="showItem()"
                        >
                            <img class="icon" src="./Images/editing.png">
                        </button>

                        <button class="delete-item btn"
                                v-on:click="deleteItem(idx)"
                        >
                            <img class="icon" src="./Images/delete.png">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="item-card"
             v-show="isActive">
            <ItemCard />
        </div>  

        <div class="add-task-wrapper">
            <button id="add-task-btn" v-on:click="addItem()">
                + Add a new task
            </button>
        </div>
    
    </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import ItemCard from './ItemCard.vue'

export default {
    components: {
        ItemCard
    },
    data() {
        return {
            taskArr: [],
            isFinished: false,
            // ? Display the card:
            isActive: false,


        }
    },
    methods: {

        addItem() {
            this.taskArr.push({
                name: "Empty task" + Math.random().toString().substring(0, 4),
                status: this.isFinished
            })
        },
        deleteItem(idx) {
            this.taskArr.splice(idx, 1)
        },
        showItem() {
            if(this.isActive == false) {
                this.isActive = true
            } else { this.isActive = false }
        }
        }
    }


</script>

<style scoped> 
/* Fonts: */
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Open+Sans+Condensed:wght@300&display=swap');

.empty-msg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 15rem;


    color: rgba(80, 80, 80, 0.433);
    font-family: 'Open Sans Condensed', sans-serif;
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

    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 20px;

    list-style: none;

    color: rgb(44, 44, 44);

    margin-left: 2rem;
    margin-top: 1rem;
}

#task-counter {
    font-family: 'BenchNine', sans-serif;
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

        color: #FFF;
        font-size: 18px;
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: bold;

        background: rgb(105, 1, 252);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.44);
    }
    #add-task-btn:hover {
        transition: 0.5s;
        background: rgb(0, 0, 0);
    }

</style>