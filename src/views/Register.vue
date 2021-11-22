
<template>
    <div id="nav">
      <router-link to="/auth"> &#8592; </router-link>
    </div>

<div class="form">
  <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">

    <label>Email:</label>
    <input class="input-email" name="email" type="email" />
    <label>Password:</label>
    <input class="input-password" name="password" type="password" />

    <button>Create a New Account</button>
  </form>
</div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from "@firebase/auth";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()

    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
          alert(e.message)
      }
    }
    return { handleSubmit }
  },
   signUp() {
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&family=Francois+One&family=Itim&family=Open+Sans+Condensed:wght@300&family=Paytone+One&family=Poiret+One&family=Righteous&family=Sen&display=swap');

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-family: 'Sen', sans-serif;
  text-transform: uppercase;

  margin-bottom: 10px;

}

#nav {
  margin-left: 1.5rem;
  margin-top: 1.5rem;
}
#nav > a {
  text-decoration: none;

  border-radius: 50%;
  padding: 12px;
  font-size: 20px;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid #000;
  padding: 15px;

  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.213);
  

  height: 10rem;

}
input {
  border: 1px #000 solid;

  height: 40px;

  text-align: center;
  
}

.input-email {
  margin-bottom: 1rem;
}

a, button {
  background: #000;
  color: #FFF;

  width: 6.5rem;
  height: 3rem;

  margin-top: 20px;

  font-size: 12px;
  font-family: 'Sen', sans-serif;
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;

  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.213);
  border: none;
}

label {
  text-transform: uppercase;
}
</style>