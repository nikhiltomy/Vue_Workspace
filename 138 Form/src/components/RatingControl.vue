<template>
  <ul>
    <li><button :class="{active: activeOption === 'poor'}" type="button" @click="activate('poor')">Poor</button></li>
    <li><button :class="{active: activeOption === 'average'}" type="button" @click="activate('average')">Average</button></li>
    <li><button :class="{active: activeOption === 'great'}" type="button" @click="activate('great')">Great</button></li>
  </ul>
</template>


<script>
    export default { 
        props:['modelValue'],
        emits:['update:modelValue'],
        data(){
          return{
              activeOption:this.modelValue,
          }  
        },
        methods: {
            activate(option){
                this.activeOption = option;
                this.$emit('update:modelValue',option);
            }
        },
    }
</script>

<style scoped>
.active{
    border-color: green;
}
.active button{
    color: grey;
}
 ul {
     list-style-type: none;
     margin: 0.5rem 0;
     padding: 0;
     display: flex;
 }

 li{
     margin: 0 1rem;
     border: 1px solid #ccc;
     padding: 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
 }
</style>