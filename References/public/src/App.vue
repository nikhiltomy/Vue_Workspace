<template>
  <div id="product-list">
    <input
      class="form-control"
      id="search-element"
      placeholder="enter product name"
      v-model="search"   
    />
    <the-button @activeModal="abcd" />
    <div class="filters row">
      <div class="form-group col-sm-3">
       <p v-if="resultQuery.length == 0">search results not found</p>
      </div>
    </div>
    <button @click="display">Clickmmeeeeeeee</button>
  </div>
  <form-component v-if="activated === true" @form-output="displaydata">
  </form-component>
  <div v-if="activated !== true" class="wrapper">
    <list-componant
      v-for="(res,index) in resultQuery"
      :key="res.id"
      :index="index"
      :title="res.title"
      :genre="res.genre"
      :path="res.path"
      @delete-item="deletelist"
    ></list-componant>
  </div>
</template>

<script>
import TheButton from "./components/TheButton.vue";
import FormComponent from "./components/FormComponent.vue";
import ListComponant from "./components/ListComponant.vue";


export default {
  components: {
    // MovieButton:MovieButton
    TheButton,
    FormComponent,
    ListComponant,
  },
  data() {
    return {
      
      search: null,
      activated: false,
      storeResources: [
        {
          id: "movie",
          title: "God Father",
          genre: "Drama",
          path:  'https://res.cloudinary.com/dafnqo9go/image/upload/v1631765000/kiehls/topm.jpg',
        },
        {
          id: "movie",
          title: "love",
          genre: "Romantic",
          path: "https://res.cloudinary.com/dafnqo9go/image/upload/v1631765000/kiehls/topm.jpg",
        },
      ],
      filteredContent:[
        {
          
        }
      ]
    };
  },
  methods: {
    abcd() {
      this.activated = true;
    },

    deletelist(id) {
     if(id > -1){ 
     return this.storeResources.splice(id, 1);
     }
    },
    displaydata(title, genre, path) {
      
     
      this.activated = false;
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        genre: genre,
        path: path,
      };
      console.log(newResource);
      this.storeResources.push(newResource);
    },

  },

  computed: {
    resultQuery() {
      if (this.search) {
        return this.storeResources.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.storeResources;
      }
    },
  },
};
</script>

<style >

.wrapper {
  display: grid;
  grid-template-columns: 500px 500px 500px;
}

.product-list{
   display: flex;
  align-items: center;
  justify-content: center;
}
.form-control {
  width: 50%;

  height: 50px;
  padding: 12px 20px;
  margin: 20px 0px 20px 400px;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
