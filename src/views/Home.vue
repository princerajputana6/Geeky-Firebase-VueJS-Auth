<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const { user } = useAuthState()
    const auth = getAuth()

    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }

    return { user, signOutUser }
  }
}
</script>
<template>
  <div class="container">
    <h3 style="text-align: center">Welcome</h3>
    <h4 style="text-align: center">{{ user?.email }}</h4>
    <button @click="signOutUser">Sign Out</button>
  </div>
</template>
