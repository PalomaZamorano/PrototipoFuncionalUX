<template>
  <div class="row">
    <app-input :msg="search" @searchChanged="search = $event"></app-input>
    <div  class="col-6 col-12-narrower">
    <md-card  v-for="(publics,index) in filteredPubli.slice().reverse()"  :key="`publics-${index}`"> 
      
      <md-card-header>
        <md-avatar>
          <img src= "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt="Avatar">
        </md-avatar>
          <div class="md-subhead">Nombre Mascota:</div>
          <div class="md-title">{{publics.firstName}}</div>
        <br/>
      </md-card-header>

      <div class="col-md-12" style="text-align: center">
      <modal name="hello-world"
       :width="300"
       :height="180"
       :resizable= true
       >
       <md-card class="col-md-6"  style="width:280;height=350">
        <div class="md-subhead">Ingrese un comentario:</div>
        <br/>
       <b-form-textarea id="textarea1"
                     placeholder="Comentario..."
                     v-model="text"
                     :rows="3"
                     :max-rows="6"
                     style="width: 250;"
                     ma
                     >
      </b-form-textarea>
        <br/>
      <div style="text-align: center" > 
        <b-button-group size="sm" >
        <b-button variant="primary" @click="enviar(text)" >Enviar</b-button>
        </b-button-group>

        <b-button-group size="sm" >
        <b-button variant="danger" @click="hide()" >Cancelar</b-button>
        </b-button-group>
      </div> 

      </md-card>  
       </modal>
      </div>


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

          <md-button class="md-icon-button" @click="show()">
             <v-icon medium  @click="ids(index)">comment</v-icon>
          </md-button>

          <md-button class="md-icon-button" @click="show1()" >
             <v-icon medium>share</v-icon>
          </md-button>
          
        </md-card-actions>
     </div>   

   <b-btn  v-b-toggle="'accordion' + index" variant="outline-primary">
    Ver comentarios...
  </b-btn>
      <br/>
      <br/>
     <b-collapse :id="'accordion' + index"  class="mt-2">
             <b-card-group deck class="mb-3"
              v-for="(coss,key) in cos[index]"  :key="`coss-${key}`">
              <b-card
                class="text-center"
                sub-title="Nombre Usuario:"
                >
              <p class="card-text">{{coss}}</p>
              </b-card>
              </b-card-group>  
      </b-collapse>
  


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
Vue.config.productionTip = false

import VModal from 'vue-js-modal'
import VModal from 'vue-js-modal/dist/ssr.index'
Vue.use(VModal)

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import {
  Facebook,
  Twitter,
  WhatsApp
} from "vue-socialmedia-share";

import App from './App.vue';



export default {
  name: 'Media',
  components: {
    Facebook,
    Twitter,
    WhatsApp,
    'app-input': App

  },
  data() {
    return {
      publi: [],
      active: false,
      value: null,
      text:"",
      comm:null,
      cos:[],
      search: '',
      element:[],
      ind:null,
      url: "https://www.abc.es/media/ciencia/2017/07/19/perro-domesticacion-9349-k4YF--620x349@abc.jpg"
    }
  },
   mounted() {
   axios.get("http://localhost:3000/publications")
          .then(response => {
            this.publi = response.data;
            console.log(this.publi);
          });
   axios.get("http://localhost:3000/comments")
          .then(response => {
            console.log(response.data);
            this.comm= response.data;

            for(var x=0; x<this.publi.length; x++){
              this.cos.push([]);  
            }

            for(var x=0; x<this.comm.length; x++){
              this.cos[x] = this.comm[x].comment  
            }
            
          });
  },
  methods:{
    show () {
      console.log("abrir");
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    enviar(text){
     
      this.element = this.cos[this.ind];
      this.element.push(text);
      this.text = "";
      this.hide(); 
    },
    ids(id){
      this.ind = id;
    },
    show1 () {
      this.$modal.show('share');
    },
    hide1 () {
      this.$modal.hide('share');
    },

  },
  computed:{
    filteredPubli:function(){
      return this.publi.filter((pub)=>{
        return pub.firstName.match(this.search)
      });
    }
  }
}
</script>

