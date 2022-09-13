<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()

    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }

    return { handleSubmit }
  }
}
</script>

<template class="login">
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input name="email" placeholder="email" type="email" required />

      <input name="password" placeholder="password" type="password" required />

      <button type="submit">Login</button>
      <p>
        Don't have an account? <router-link to="/signup">Register</router-link>.
      </p>
    </form>
  </div>
</template>
