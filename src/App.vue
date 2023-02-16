<template>
  <div id="app">
    <HeaderMain />
    <router-view />
  </div>
</template>
<script>
import HeaderMain from "./components/HeaderMain.vue";
export default {
  components: {
    HeaderMain,
  },
};
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #9c8982; */
  background-color: #eeeeee;
  /* background-color: #43354f; */
  /* height: 100vh; */
  width: 100vw;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
