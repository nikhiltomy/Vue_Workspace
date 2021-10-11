<template
  >\

  <div class="row">
    <div class="column">
         <button type="button" class="button" @click="deleteResource">
        delete
      </button>
        <img :src="path" class="img" />
       
      <h1 class="title">{{ title }}</h1>
      <h2 class="genre">{{ genre }}</h2>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["key", "title", "genre", "path","logo"],
  data() {
    return {};
  },
  methods: {
    deleteResource() {
      this.$emit("delete-item", this.key);
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 30%;
  padding: 10px;
  display: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  display: flex;
}
.img {
    width: 70%;
}
button{
    float: right;
  
}
</style>
