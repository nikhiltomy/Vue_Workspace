<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <button @click="activateBtn('active-goals')">Active Goals</button>
    <button @click="activateBtn('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponents"></component>
  </div>
</template>

<script>
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'
export default {
  components:{
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponents:"active-goals",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    activateBtn(cmp){
      this.selectedComponents = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>