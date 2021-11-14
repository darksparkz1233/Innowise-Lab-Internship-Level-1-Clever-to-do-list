<template>
 <div id="main">
     <!-- ! Top Level: -->
     <div class="header-container">
         <Header />
         <Menu />
     </div>

    <div class="calendar-display">
        <Calendar />
    </div>

    <div class="task-list">
        <TaskView />
    </div>

 </div>
</template>

<script>
import Header from './components/Header.vue';
import Calendar from './components/Calendar.vue';
import Menu from './components/Menu.vue';
import TaskView from './components/TaskView.vue';

export default {
    components: {
        Header,
        Calendar,
        Menu,
        TaskView
    }
}
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
</style>
