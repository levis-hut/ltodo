<template>
  <!-- <nav class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
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

.nav {
  display: flex;
  width: 100%;
  height: 2rem;
}

.w-100 {
  width: 100%;
}

.w-50 {
  width: 50%;
}

.w-30 {
  width: 30%;
}

.h-100 {
  height: 100%;
}

.h-50 {
  height: 50%;
}

.h-30 {
  height: 3%;
}

.d-flex {
  display: flex;
}

.c-red {
  color: #f34f1c;
}

.c-yellow {
  color: #ffba01;
}

.c-blue {
  color: #01a6f0;
}

.c-green {
  color: #7fbc00;
}

.c-gray {
  color: #747474;
}
</style>
