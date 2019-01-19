<template>
  <div class="row">

    <div class="col-6 col-12-narrower">
    <md-card  v-for="(publics,key) in publi.slice().reverse()"  :key="`publics-${key}`"> 
      
      <md-card-header>
        <md-avatar>
          <img src= "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="Avatar">
        </md-avatar>

          <div class="md-subhead">Nombre Mascota:</div>
          <div class="md-title">{{publics.firstName}}</div>
        <br/>
      </md-card-header>

      
      <md-card-media>
        <img :src= publics.photo class="responsive" alt="Norway">
      </md-card-media>
        <br/>
      <div class="well well-sm"> 
  <md-card-expand>
        <md-card-expand-content>
          <md-card-content>
            <div class="md-list-item-text">  <span> <strong>Raza:</strong>   {{publics.gender}}</span> 
            </div> 
            <div class="md-list-item-text"> <span> <strong>Comuna:</strong> {{publics.lastName}}</span>
            </div>
            <div class="md-list-item-text"> <span> <strong>Fecha:</strong> {{publics.age}}</span> 
            </div> 
            <div class="md-list-item-text"> <span> <strong>Contacto:</strong> {{publics.phone}}</span> 
            </div>
            <div> <span> <strong>Descripción:</strong> {{publics.email}}</span> 
            </div>
            
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>

      <md-card-actions>

         <md-card-expand-trigger>
            <md-button>Ver más</md-button>
          </md-card-expand-trigger>

          <md-button class="md-icon-button">
             <v-icon medium>comment</v-icon>
          </md-button>

          <md-button class="md-icon-button">
             <v-icon medium>share</v-icon>
          </md-button>
          
        </md-card-actions>
     </div>   
    </md-card>

    </div>

  </div>
</template>

<style lang="scss" scoped>
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

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueMaterial)
import axios from 'axios';


export default {
  name: 'Media',
  data() {
    return {
      publi: []      
    }
  },
   mounted() {
  axios.get("http://localhost:3000/publications")
          .then(response => {
            this.publi = response.data;
            console.log(this.publi);
          });

  }
}
</script>

