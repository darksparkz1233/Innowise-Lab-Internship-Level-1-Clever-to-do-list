<template>
 <div id="main">
     <!-- ! Top Level: -->
    <div class="auth">
        <!-- <router-view /> -->
    </div>
    
    <div class="greeting-block">
         <button @click="signOutUser">Sign Out</button>
         <h1 id="greet-user"> {{ user?.email }}</h1>
    </div>

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
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import Header from './Header.vue';
import Calendar from './Calendar.vue';
import Menu from './Menu.vue';
import TaskView from './TaskView.vue';

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Auth from '../Auth.vue'


import { getAuth } from '@firebase/auth'
import { signOut } from '@firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'


export default {
    components: {
        Header,
        Calendar,
        Menu,
        TaskView,
        Login,
        Register,
        Auth
    },
     name: 'Home',

    setup() {
        const { user } = useAuthState()
        const auth = getAuth()  

        const router = useRouter()
        const signOutUser = async () => {
            try {
                await signOut(auth)
                router.push('/auth')
            
            } catch(e) {
                alert(e.message)
            }
        }
        return { user, signOutUser }
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

.auth {

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
