import {createApp} from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';
import NewFriend from './components/NewFriend';
const app = createApp(App);
app.component('new-friend',NewFriend);
app.component('friend-contact',FriendContact);
app.mount('#app');


































// import { createApp } from 'vue';

// import App from './App.vue';
// import FriendContact from './components/FriendContact.vue';

// const app = createApp(App);

// app.component('friend-contact', FriendContact);

// app.mount('#app');
