<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? 'Favorite' : '' }}</h2>
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
    <button @click="$emit('delete-contact',id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailId",'isFavorite'],
  props:{
    id:{
      type:String,
      required:true
    },
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
  emits:['toggle-favorite','delete-contact'],
  // emits:{
  // 'toggle-favorite': function(id){
  //   if(id){
  //     return true;
  //   }else{
  //     console.log("Id is missing");
  //     return false;
  //   }
  // }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
    
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
     this.$emit('toggle-favorite',this.id);
    },
  },
};
</script>
