<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? 'Favorite' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFav">
      {{ friendIsFavorite =='1' ? "Hide" : "Show" }}Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailId }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailId",'isFavorite'],
  props:{
    name: {
      type:String,
      required: true
    },
    phoneNumber:{
      type:String
    },
    emailId: String,
    isFavorite:{
      type:Boolean,
      required:false,
      default:false,
    } 
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite:this.isFavorite
    };
    
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
     this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>
