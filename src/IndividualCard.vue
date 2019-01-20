<template>
 <div class="row">
  <div class="col-6 col-12-narrower">

     <md-card>

         <md-card-header>
        <md-avatar>
          <img src= "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="Avatar">
        </md-avatar>
          <div class="md-subhead">Nombre Mascota:</div>
          <div class="md-title">{{publi.firstName}}</div>
        <br/>
      </md-card-header>



      <md-card-media>
        <img :src= publi.photo class="responsive" alt="Norway">
      </md-card-media>
        <br/>
      <div class="well well-sm"> 
      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>
            <div class="md-list-item-text">  <span> <strong>Raza:</strong>   {{publi.gender}}</span> 
            </div> 
            <div class="md-list-item-text"> <span> <strong>Comuna:</strong> {{publi.lastName}}</span>
            </div>
            <div class="md-list-item-text"> <span> <strong>Fecha:</strong> {{publi.age}}</span> 
            </div> 
            <div class="md-list-item-text"> <span> <strong>Contacto:</strong> {{publi.phone}}</span> 
            </div>
            <div> <span> <strong>Descripción:</strong> {{publi.email}}</span> 
            </div>
          </md-card-content>
        </md-card-expand-content>
    </md-card-expand>

      <md-card-actions>

         <md-card-expand-trigger>
            <md-button>Ver más</md-button>
          </md-card-expand-trigger>

          <md-button class="md-icon-button" @click="show1()" >
             <v-icon medium>share</v-icon>
          </md-button>
          
        </md-card-actions>
     </div>   

    </md-card>



  </div>
   <div class="col-md-12" style="text-align: center">
      <modal name="share"
       :width="100"
       :height="200"
       :resizable= true
       >
       
        <div>
        <b-list-group>
        <b-list-group-item> 
          <facebook :url="url" title="HelPet" scale="3"></facebook>
        </b-list-group-item>
        <b-list-group-item>
          <twitter :url="url" title="HelPet" scale="3"></twitter>
        </b-list-group-item>
        <b-list-group-item>
          <whats-app :url="url" title="HelPet" scale="3"></whats-app>
        </b-list-group-item>
        </b-list-group>
        </div>
          
       </modal>
   </div>
 </div>
</template>
<script>
import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
import axios from 'axios';
Vue.config.productionTip = false

import VModal from 'vue-js-modal'
import VModal from 'vue-js-modal/dist/ssr.index'
Vue.use(VModal)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuetify from 'vuetify'

import {
  Facebook,
  Twitter,
  WhatsApp
} from "vue-socialmedia-share";


export default {
  name: 'Media',
  components: {
    Facebook,
    Twitter,
    WhatsApp
  },
  data() {
    return {
      publi: {},
      url: "https://www.abc.es/media/ciencia/2017/07/19/perro-domesticacion-9349-k4YF--620x349@abc.jpg"
    }
  },
   mounted() {
       var id = this.$route.params.id; 
    axios.get("http://localhost:3000/publications/" + id)
          .then(response => {
            this.publi = response.data;
            console.log(this.publi);
          });
   },
  methods:{
    show1 () {
      this.$modal.show('share');
    }
  }
}
</script>

<style>
.md-card {
    overflow: hidden;
    width: 320px;
    margin: 10px;
    vertical-align: top;
    overflow: hidden;
    padding: 16px;

  }
  .responsive {
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
</style>
