<template lang="">
  <div>
    <h1>Sample Project</h1>
    <the-container></the-container>
    <p>Text:---{{input}}</p>
  </div>
</template>
<script>
import TheContainer from './components/TheContainer.vue';
export default {
  components:{
    TheContainer
  },
  data() {
    return {
      input:''
    }
  },
  mounted(){
    this.$root.$on('update',function(){
     this.input = "data updated";
    });
  }
}
</script>
<style lang="">
  
</style>