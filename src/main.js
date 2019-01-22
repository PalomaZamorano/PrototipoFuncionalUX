import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import ActorForm from './ActorForm.vue';
import FormPubl from './FormPubl.vue';
import MapPlace from './MapPlace.vue';

import IndividualCard from './IndividualCard.vue';
import Perfil from './Perfil.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';
require("./style.scss");
import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource); 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCY64oyowxePuPul37MYVfsIZpF8pLNQRI',
    libraries: 'places',
  },})
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const bus = new Vue();

const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors},
  {path:'/agregarActor', component:ActorForm},
  {path:'/form-publ', component:FormPubl},
  {path:'/map',component:MapPlace},
  {path:'/card/:id',component:IndividualCard},
  {path:'/perfil',component:Perfil},
  {path:'/encontrados',component:Index}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
