<template>
  <div>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>email:</strong>{{ friend.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "nikhil",
        name: "Nikhil Tomy",
        phone: "9497274176",
        email: "nikhiltomy7176@gmail.com",
      },
    };
  },
  methods : {
      toggleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  }
};
</script>
