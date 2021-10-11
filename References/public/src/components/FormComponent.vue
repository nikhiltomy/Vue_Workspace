<template>
    <form @submit.prevent="submitForm" class="myForm">
    <div class="form-group">
      <label for="add-name" class="add-name">title</label>
      <input class="form-control" id="add-name" v-model="enteredTitle"  required />
    </div>
    <div class="form-group">
      <label for="add-description" class="add-name">genre</label>
      <input class="form-control" id="add-description" rows="10" v-model="enteredGenre" required />
    </div>
    <div class="form-group">
      <label for="add-price" class="add-name">path <span class="glyphicon glyphicon-euro"></span></label>
      <input type="text" class="form-control" id="add-price" v-model="enteredPath" required />
    </div>
    <button type="submit" class="btn1 btn-primary" >add</button>
    
  </form>
</template>

<script>
export default {
 
    data() {
        return {
           enteredTitle:"",
           enteredGenre:"",
           enteredPath:"", 
        }

    },
    methods:{
        submitForm(){
      this.$emit('form-output',this.enteredTitle,this.enteredGenre,this.enteredPath)
    }
      
    }
}
</script>

<style scoped>
 
/* .myForm{
  width: 70%;
  padding:50px 0px 0px 250px ;
}
.btn1 {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn1:hover {
  background-color: #45a049;
}
.form-control {
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.add-name{
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  
} */
</style>

