import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCXbI4lCZvyGj7hNW39JF0fn7Y-KFjNbCI',

  authDomain: 'vue-firebase-auth-testing.firebaseapp.com',

  projectId: 'vue-firebase-auth-testing',

  storageBucket: 'vue-firebase-auth-testing.appspot.com',

  messagingSenderId: '697654606598',

  appId: '1:697654606598:web:deb106d5ff4f4b64553c87',

  measurementId: 'G-GP9QPXB0X2'
})

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

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

  return { user, error, isAuthenticated }
}
