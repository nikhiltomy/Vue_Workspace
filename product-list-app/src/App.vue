<template>
  <the-search @filter-product="setQuery" v-show="enableFilter == false"></the-search>
  <the-filter @price-filter="updateFilter" @clear-filter="this.enableFilter = false"></the-filter>
  <!-- <card-container :products="enableFilter ? filterProducts  : resultQuery" :isLoading="isLoading"></card-container> -->
   <card-container :products="enableFilter ? filterProducts  : resultQuery" :isLoading="isLoading"></card-container>
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
    
    updateFilter(min, max) {
      this.filterProducts=[];
      this.enableFilter = true;
      console.log(min + " " + max);
      this.resultQuery.filter((product) => {
      if (product.price >= min && product.price <= max) {
        return this.filterProducts.push(product)
      }
      console.log(this.filterProducts);
      });
       
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
    bothFilter(){
      return this.product.concat(this.filterProducts);
    }
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
