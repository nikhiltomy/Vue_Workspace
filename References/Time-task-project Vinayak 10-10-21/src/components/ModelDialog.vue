<template lang="">
<div>
<dialog open>
<form @submit.prevent="$emit('saveto-app',tasktitle,description,startdate,enddate,person)">
  <label> Task Title </label> <br>
  <input type="text" placeholder="title" v-model="tasktitle"  /> <br>
  <label> Description </label> <br>
  <input type="text" placeholder="description" v-model="description" /><br>
  <label> Start Date </label> <br>
  <input type="text" placeholder="Start date" v-model="startdate" /><br>
   <label> End Date </label> <br>
  <input type="text" placeholder="End date" v-model="enddate" /><br>
  <label> Assigned person </label> <br>
  <input type="text" placeholder="Person" v-model="person" />
<br>
<button type="submit"> Submit </button>
<button @click="$emit('close-form')">Close</button>
</form>
</dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasktitle: "",
      description: "",
      startdate: "",
      enddate: "",
      person: "",
    };
  },
  emits:['close'],

};
</script>
<style scoped>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: beige;
  padding: 100px;
}

label {
  font-family: sans-serif;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-size: 0.8em;
}

input[type="text"] {
  display: inline-block;
  border: none;
  text-align: left;
  box-shadow: 3px 2px rgba(121, 83, 210, 0.3);
  padding: 10px;
  width: 350px;
  margin: 10px 0;
  background: transparent;
}

input[type="text"]:focus {
  background: none;
  border: none;
}

button {
  background: transparent;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 20px 0;
  padding: 10px 30px;
  border: 2px solid rebeccapurple;
}

button:hover {
  background: transparent;
  border: 2px solid rgba(69, 39, 160, 0.4);
}
</style>




 <!-- <label>Name</label>
       <input type="text" v-model="enteredName">
        <label>Phone</label>
       <input type="text" v-model="enteredPhone">
       <button @click="$emit('saveto-app',enteredName,enteredPhone)">Click</button> -->