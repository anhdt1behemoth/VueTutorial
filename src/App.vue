<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/lifecycle/tuananh">LifeCycle</router-link> |
      <router-link to="/lifecycle1/tuananh2">LifeCycle1</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/methods">Methods</router-link> |
      <router-link to="/databinding">Data Binding</router-link>
    </nav>
    <ul>
      <li>
        <router-link to="/users/eduardo/posts/1">/users/eduardo/posts/1</router-link>
      </li>
      <li>
        <router-link to="/users/eduardo/posts/20">/users/eduardo/posts/20</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
