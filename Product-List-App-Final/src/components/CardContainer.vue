<template>
  <div class="card-container">
    <card-list
      v-for="product in products"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :price="product.price"
    ></card-list>
   <h2 v-if="products.length== 0 && isLoading == false">Products Not Found...</h2>
  </div>
</template>
<script>
import CardList from "./CardList.vue";
export default {
  props: ["products",'isLoading'],
  components: {
    CardList,
  },
};
</script>

<style scoped>
.card-container {
  padding-top: 10%;
  align-items: start;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, 500px);
  justify-content: center;
}
h2{
  margin-left: 20%;
}
</style>
