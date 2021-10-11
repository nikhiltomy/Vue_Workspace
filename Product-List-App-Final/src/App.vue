<template>
  <the-search @filter-product="setQuery"></the-search>
  <the-filter @price-filter="updateFilter" @clear-filter="clear"></the-filter>
  <!-- <card-container :products="enableFilter ? filterProducts  : resultQuery" :isLoading="isLoading"></card-container> -->
   <card-container :products="resultQuery" :isLoading="isLoading"></card-container>
  <div class="loading">
  <h2 v-if="isLoading == true">Loading...</h2>
  </div>
</template>
<script>
import TheSearch from "./components/TheSearch.vue";
import CardContainer from "./components/CardContainer.vue";
import TheFilter from "./components/TheFilter.vue";
export default {
  components: {
    TheSearch,
    CardContainer,
    TheFilter,
  },
  data() {
    return {
      products: [],
      duplicateProducts:[],
      filterProducts:[],
      isLoading: false,
      searchQuery: null,
      enableFilter:false,
    };
  },
  methods: {
    setQuery(inputText) {
      this.searchQuery = inputText;
    },
    clear(){
    this.enableFilter = false;
    this.products = this.duplicateProducts;
    },
    updateFilter(min, max) {
      this.filterProducts=[];
      this.enableFilter = true;
      console.log(min + " " + max);
      this.products.filter((product) => {
      if (product.price >= min && product.price <= max) {
        this.filterProducts.push(product)
        this.products = this.filterProducts;
      }
      console.log(this.filterProducts);
      });
     this.resultQuery = this.filterProducts;  
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.products.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.products;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data)
        this.isLoading = false;
        data.map((item) => {
          this.products.push(item);
        });
      });
  this.duplicateProducts = this.products;
  },
};
</script>

<style>
body {
  background-color: bisque;
}
.loading{
  align-content: center;
  position: absolute;
  left:45%;
}
</style>
