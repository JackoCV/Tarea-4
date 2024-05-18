<template>
  <div id="app">
    <nav>
      <router-link to="/">Convertidor de Distancia</router-link>
      <router-link to="/temperature">Convertidor de Temperatura</router-link>
      <router-link to="/weight">Convertidor de Peso</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #121212;
  color: #ffffff;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  width: 100%;
  max-width: 800px;
  padding: 20px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #054d00;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav a {
  color: white;
  font-weight: bold;
}

nav a:hover {
  color: #999993;
}

.content {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #757976;
  border-radius: 8px;
  margin-top: 80px; 
}
</style>
