<template>

   <div class="container">
    
      <img :src="path" class="img" />
       
     <h1 class="title">{{ title }}</h1> 
     <h2 class="genre">{{ genre }}</h2>
      <div>
      <button  @click="deleteResource">
        delete
      </button>
    </div>
   </div>
  
</template>

<script>
export default {
emits:['delete-item'],
  props: ["key", "title", "genre", "path","index"],
  data() {
    return {};
  },
  methods: {
    deleteResource() {
      this.$emit("delete-item", this.index);
      console.log(this.index);
    },
  },
};
</script>

<style scoped>

img{
  align-items: center;
}
.container{
  border:1px solid red;
  text-align: center;
  margin-top: 10%;
  background-color: cadetblue;
}
h1,h2{
  text-align: center;
}
</style>
