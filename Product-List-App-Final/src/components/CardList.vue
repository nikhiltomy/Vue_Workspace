<template>
    <div class="card">
      <img :src="image" alt="">
      <h1>{{title}}</h1>
      <h3>{{title}}</h3>
      <p>{{price}}</p>
    </div>
</template>

<script>
  export default {
      props:['image','title','price']
  }  
</script>
<style scoped>
.card {
  background-color: rgb(230, 168, 146);
  border-radius: 5px;
  color: white;
  padding: 0px 0 0px;
  text-align: center;
  text-shadow: 1px 1px 0 #555;
  height: 100%;
}
.title-tag {
  padding-top: 10%;
  align-items: start;
  /* display: grid; */
  /* grid-gap: 16px; */
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
}
img{
 width:500px;
 height: 500px;
}
</style>