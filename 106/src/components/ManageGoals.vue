<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref='goal'/>
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid === true">
        <h2>Input is Invalid</h2>
        <p>Enter something to Continue....</p>
        <button @click="inputIsInvalid = false">Okey</button>
    </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
    export default {
        components:{
            ErrorAlert
        },
        data() {
            return {
                inputIsInvalid:false
            }
        },
        methods:{
            setGoal(){
                const enteredValue = this.$refs.goal.value;
                if(enteredValue === ''){
                this.inputIsInvalid = true;
                }
            }
        }
    }
</script>
