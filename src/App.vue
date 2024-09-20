<template>  
  <div class="row">
    <div class="col-12">
      <div id="nav">
          <router-link to="home">Home</router-link> |
          <router-link to="hello">Hello</router-link>
      </div>
    </div>  

  <div class="col-12 bg-light">
    <router-view/>  
  </div>
</div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
