<template>
  <div class="container">
      <input type="text" id="box" placeholder="Search anything..." class="search__box" v-model="inputText"  @keyup="filterProduct">
      <button class="fas fa-search search__icon" id="icon" ></button>
  </div>
</template>

<script>
 export default{

     data() {
         return {
          inputText:null 
         }
     },
     methods:{
       filterProduct(){
         this.$emit('filter-product',this.inputText)
       }
     }
 }
</script>

<style scoped>
.container {
  width: 350px;
  height: auto;
  background-color: #1e272e;
/*   margin: 20vh auto; */
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4rem;
  padding: 10px;
}

.search__box {
  float: left;
  width: 0;
  height: 4rem;
/*   display: inline; */
  background: none;
  color: #f7f7f7;
  font-size: 1.5rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  position: relative;
  opacity: 1;
  transition: all .75s ease-in;
  cursor: pointer;
/*   border: 2px solid tomato; */
/*   margin-top: 5px; */
}

/* .search__box:focus, .search__box:hover {
  background-color: #f1f2f6;
} */

.search__icon {
  box-sizing: border-box;
  float: right;
  font-size: 4rem;
  display: inline-block;
/*   justify-content: center;
  align-items: center; */
  margin-left: .8rem;
  margin-top: 0;
  cursor: pointer;
  position: absolute;
  color: #fa983a;
  transition: all .25s ease-in;
  padding: .7rem;
  border-radius: 50%;
}

.container:hover > .search__box {
  width: 85%;
  padding: 0 1rem;
}

.container:hover > .search__icon {
  background-color: #eee;
}

.show {
  width: 85%;
  border: 1px solid red;
}
</style>