<template>
    <form @submit.prevent="addContact">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label for="">phone</label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
            <label for="">email</label>
            <input type="email"  v-model="enteredEmail"/>
        </div>
        <button>Add Contact</button>
    </form>
</template>
<script>
   export default {
       emits : ['add-contact'],
       data() {
           return {
               enteredName:"",
               enteredPhone:"",
               enteredEmail:""
           }
       },
       methods:{
           addContact(){
               this.$emit('add-contact',this.enteredName,this.enteredPhone,this.enteredEmail);
           }
       }
   }
</script>