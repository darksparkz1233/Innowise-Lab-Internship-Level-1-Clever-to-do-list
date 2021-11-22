<template>
    <div class="task-wrapper">
        <p id="task-counter"> Tasks Today: {{  taskArr.length  }} </p>
        
        <div class="task-counter-wrapper">
            <div class="task-list" 
                 v-for="(task, index) in taskArr"
                 :key="task.id">

                <div class="list-item">
                    <input class="list-checkbox" type="checkbox" name="" id="">
                    {{ task }}

                    <button class="delete-item"
                            @click="deleteItem(index)"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>


        <div class="add-task-wrapper">
            <button id="add-task-btn" v-on:click="addItem()">
                + Add a new task
            </button>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskArr: [],
            // TODO status:
            isEditing: false,
            id: 0,

        }
    },
    methods: {
        addItem: function () {
            this.taskArr.push('Empty task')
        },
        deleteItem: function(index) {
            this.taskArr.splice(index, 1)
        },
    }
}

</script>

<style scoped> 
/* Fonts: */
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Open+Sans+Condensed:wght@300&display=swap');

.task-wrapper {
    margin-top: 5rem;
    margin-left: 2rem;
}
.task-counter-wrapper {
    overflow-x: scroll;

    max-height: 20rem;
}
.task-list {
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 20px;

    list-style: none;

    color: rgb(44, 44, 44);

    margin-left: 2rem;
    margin-top: 1rem;

    /* background: #000; */

}

#task-counter {
    /* position: fixed; */
    font-family: 'BenchNine', sans-serif;
    font-size: 2rem;

}

.list-item {
    margin-top: 1rem;
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