<template>
  <div id="app">
    
   <keep-alive> <router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate(){
  console.log(this.$store);
this.$http.getallData().then((data)=>{
  console.log(data.data);
});
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app{
  background-color: #a94442;
}
</style>
