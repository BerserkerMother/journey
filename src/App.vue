<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
/* Global styles for the entire app */
body {
  font-family: Consolas, monospace;
  margin: 0;
  padding: 0;
  background-color: #1e1e1e;
  /* Dark background color */
  color: #d4d4d4;
  /* Light text color */
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

/* Header styles */
header {
  background-color: #252526;
  /* VS Code header background color */
  padding: 10px 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: #d4d4d4;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* Footer styles */
footer {
  background-color: #252526;
  /* VS Code footer background color */
  padding: 20px;
  color: #d4d4d4;
  text-align: center;
}

/* Add more global styles as needed */
</style>