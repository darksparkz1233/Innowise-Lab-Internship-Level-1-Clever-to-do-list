//
// ───  ANCHOR IMPORTS ────────────────────────────────────────────────────────────────────
//
import {
    initializeApp
} from "@firebase/app";
import {
    getAuth,
    onAuthStateChanged
} from "@firebase/auth";
import {
    ref,
    onMounted,
    onUnmounted,
    computed
} from "vue"
// ────────────────────────────────────────────────────────────────────────────────



//
// ───  ANCHOR FIREBASE CONFIG ────────────────────────────────────────────────────────────
//
export const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBHrVos3hd-j8GjKoTY6_oh-fPKO0XNs6U",
    authDomain: "clever-todo-754fc.firebaseapp.com",
    projectId: "clever-todo-754fc",
    storageBucket: "clever-todo-754fc.appspot.com",
    messagingSenderId: "233676974664",
    appId: "1:233676974664:web:a7288f32ed7b75b2e3467d",
    measurementId: "G-JXWB1METB0"
})
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── ANCHOR FIREBASE AUTH ──────────────────────────────────────────────────────────────
//
export const useAuthState = () => {
    const user = ref(null)
    const error = ref(null)

    const auth = getAuth()
    let unsubscribe
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            u => (user.value = u),
            e => (error.value = e)
        )
    })
    onUnmounted(() => unsubscribe())

    const isAuthenticated = computed(() => user.value != null)

    return {
        user,
        error,
        isAuthenticated
    }
}

export const getUserState = () =>
    new Promise((resolve, reject) =>
        onAuthStateChanged(getAuth(), resolve, reject)
    )
// ────────────────────────────────────────────────────────────────────────────────
