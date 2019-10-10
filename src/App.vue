<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/calc">Calc</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
    <router-view />
    <p class="hard-to-read">version 4.3.2</p>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 30px;
}
#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.hard-to-read {
  color: lightgray;
  font-size: 0.7em;
}
</style>

