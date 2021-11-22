<template>
    <div id="main-wrapper">
        <div class="welcome-screen">
            <h1>Clever Task Manager</h1>
        </div>


        <div id="nav">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Sign up</router-link>
        </div>

        <div class="router-wrapper">
            <div class="router">
                <router-view v-if="true" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fonts: */
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Francois+One&family=Itim&family=Open+Sans+Condensed:wght@300&family=Paytone+One&family=Poiret+One&family=Righteous&family=Sen&display=swap');

    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }
    #main-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    
        height: 35rem;
        margin: 1rem;
        font-family: 'BenchNine', sans-serif;
    }

    .welcome-screen {
        display: flex;
        flex-direction: column;

        font-size: 16px;
        font-family: 'Sen', sans-serif;
        text-align: center;

        margin-bottom: 1.5rem;
    }

    #nav {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin-bottom: 5rem;

        font-family: 'Sen', sans-serif;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;


        
    }
    #nav > a {
        transition: 0.3s ease-in-out;

        text-decoration: none;
        text-align: center;

        margin: 0 1rem 0 1rem;
        padding: 10px;

        color: #FFF;
        background: #000;
        
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.213);
    }
    #nav > a:hover {
    }

    h1 {
        margin-bottom: 1.5  rem;
    }
</style>