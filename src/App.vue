<template>

  <div id="page-wrapper">

  <div class="col-md-14 ml-auto">  
  <md-toolbar class="md-accent" md-elevation="1" style="background-color: #3BB9D8;position: fixed;">

   <a href="/"> <img class = "md-title" src="images/icono.png" alt="Icono"
								 style="width:50px;height:50px;" ></a>

      <input type="text" placeholder="Buscar..." v-model="filtro" @input="emitiendo">
      <md-button to="/form-publ" class="md-icon-button">
        <v-icon medium>add_circle</v-icon>
      </md-button> 

 <b-dropdown variant="link" size="lg" no-caret  >
    <template slot="button-content">
      <md-badge md-content="2">           
        <v-icon id ="link" medium>notifications </v-icon>
      </md-badge>
    </template>
    <b-dropdown-item href="#/card/10">
      <md-avatar>
          <img src= "https://media.telemundo51.com/images/652*426/AHORA-PARQUE-PERROS.JPG" alt="Avatar">
        </md-avatar> 
      CHRISTIAN
    </b-dropdown-item>
    <b-dropdown-item href="#/card/9">
      <md-avatar>
          <img src= "https://www.radiozero.cl/static/2018/08/pitbull-992x500.jpg" alt="Avatar">
        </md-avatar>
        NICK     
    </b-dropdown-item>
  </b-dropdown>

  <b-dropdown variant="link" size="lg" no-caret  >
    <template slot="button-content">          
        <v-icon id ="link" medium>account_box</v-icon>
    </template>
    <b-dropdown-item href="#/perfil">
      Mi perfil
    </b-dropdown-item>
    <b-dropdown-item href="#">
      Salir   
    </b-dropdown-item>
  </b-dropdown>

      
    </md-toolbar>
</div>


<div id="navflotante" class="col-md-14 ml-auto">
  <md-toolbar class="md-accent" md-elevation="1" style="background-color: #3BB9D8;">
      <md-button to="/" >Perdidos</md-button>
      <md-button  to="/map" >Mapa</md-button>
      <md-button  to="/encontrados" >Encontrados</md-button>
    </md-toolbar>
</div>
    <br/>
    <br/>
    <br/>
    <br/>
<main class="container">
      <router-view></router-view>
    </main>





    
</div>

 


</template>

<script>

import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import EventBus from './event-bus';
import {bus} from "./main";





export default {
  data(){
    return{
      filtro:''
    }
  },
  methods:{
    emitiendo(){
      bus.$emit("a-s-d",this.filtro);
      console.log(this.filtro);
    },
    changeSearch(event){
      //this.filtro=event.target.value;
     // EventBus.$emit('i-searchChanged',1);
    }
  }
}
</script>

<style lang="scss" scoped>
      $primary:#FFF;
      $accent: #d34747;
      $blue: #21d4fd;
      $purple: #b721ff;
			#navflotante{
        z-index:10;
				overflow: hidden;
        background-color: #333;
        position: fixed;
        bottom: 0;
        width: 100%;
				}
      .active{
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      }
      .md-toolbar + .md-toolbar {
         margin-top: 16px;
      }
   
			#search {
				  display: block;
				  color: black;
				  text-align: center;
				  padding:8px 12px;
				  text-decoration: none;
				}
      #link{
         color: white;
      }
      ::placeholder{
        color: 'red'
      }
      ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: rgba(19, 40, 48, 0.54);
      }
    
				</style>
        