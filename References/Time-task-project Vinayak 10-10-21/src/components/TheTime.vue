<template>
  <div class="in-lines">
    <input
      type="number"
      v-model.number="entertime"
      @focusout="addTime()"
      style="width: 100px; height: 45px"
    />
    <!-- <button @click="addTime">Submit</button> -->
    
  </div>
</template>
<script>
export default {
  props:['index'],
  data() {
    return {
      entertime:'',
      totaltime:null,
    };
  },
  methods: {
    addTime() {
      this.totalTime = this.totalTime + this.entertime;
      this.$emit('save-time',this.totalTime);
      // this.totalTime = 0;
    },
  },
};
</script>
<style>
.in-lines {
  display: flex;
}
</style>