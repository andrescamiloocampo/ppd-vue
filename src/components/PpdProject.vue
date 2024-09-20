<template>
  <div>
    <h1>Random fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>    
  </div>
</template>

<script>
export default {
  name: 'PpdProject',
  props: {
    msg: String
  },
  data(){
    return{
      fact: "",
    }
  },
  methods:{
    fetchData(){
      fetch('https://jsonplaceholder.typicode.com/posts',{
       method: 'POST',
       body:JSON.stringify({
        title: "ie",
        body:"barg",
        userId:2
       }),
       headers:{
        'Content-type':'application/json; charset=UTF-8'
       }
      }        

      )
      .then((response)=>response.json())      
      .then(json => console.log(json))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    padding: 12px 32px;
    font-size: 16px;
    border-radius: 8px;
  }
</style>
