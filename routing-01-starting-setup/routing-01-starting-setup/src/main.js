import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[ 
        {path: '/teams',component : TeamsList,alias:'/'},
        {path: '/users',component: UsersList},
        {path:'/teams/:teamId',component:TeamMembers },
        {path:'/:notFound(.*)',component:NotFound }
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
