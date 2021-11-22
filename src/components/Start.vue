<template>
        <div class="router-wrapper">
            <div class="router">
                <router-view v-if="true" />
            </div>
        </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from "@firebase/auth";
import { useRouter } from 'vue-router'

export default {

}
</script>