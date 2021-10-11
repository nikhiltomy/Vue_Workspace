<template>
  <div class="actions">
    <button class="btn btn-default" @click="$emit('active-modal')">
      <span class="glyphicon glyphicon-plus"></span>
      Add product
    </button>
  </div>
</template>
<script>
  export default{
    emits:['active-modal']
  }
</script>
<style>
.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin-left: 400px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
