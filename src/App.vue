<template class="main-class">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Sign up</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: rgb(53, 52, 52);
  color: black !important;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  justify-content: space-around;
}
</style>
