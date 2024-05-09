<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>


<style scoped>
/* Header styles */
header {
  background-color: #252526;
  /* VS Code header background color */
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  /* Center content horizontally */
  align-items: center;
  /* Center content vertically */
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
</style>