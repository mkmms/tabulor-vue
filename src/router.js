import VueRouter from 'vue-router'


import Home from './pages/Home.vue';
import BasicTable from './pages/BasicTable.vue';


// Routes
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/basic-table",
    component: BasicTable
  }
]


export default new VueRouter({
  routes
})