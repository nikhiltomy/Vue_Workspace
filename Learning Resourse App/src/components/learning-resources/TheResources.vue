<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="selectedTab === 'add-resources' ? null : 'flat'"
    >
      Add Resources</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResources
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guid',
          title: 'Official Guide',
          descreption: 'The official Vue Js Documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          descreption: 'Learn from google',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(name, des, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: name,
        description: des,
        link: link
      };
      this.storedResources.unShift(newResource);
      this.selectedTab = 'stored-resources';
    }
  },
  
};
</script>
