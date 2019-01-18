<template>

  <div id="page-wrapper">

  <div class="col-md-14 ml-auto">  
  <md-toolbar class="md-accent" md-elevation="1" style="background-color: #3BB9D8;">

    <img class = "md-title" src="images/icono.png" alt="Icono"
								 style="width:50px;height:50px;" >
      
      
         
      <input  type="text" placeholder="Buscar..."> 
      <md-button to="/form-publ" class="md-icon-button">
        <v-icon medium>add_circle</v-icon>
      </md-button>          
      <md-button class="md-icon-button">
        <v-icon medium>notifications</v-icon>
      </md-button>
      <md-button class="md-icon-button">
        <v-icon medium>account_box</v-icon>
      </md-button>
      
    </md-toolbar>
</div>


<div id="navflotante" class="col-md-14 ml-auto">
  <md-toolbar class="md-accent" md-elevation="1" style="background-color: #3BB9D8;">
      <md-button to="" >Perdidos</md-button>
      <md-button  to="" >Mapa</md-button>
      <md-button  to="" >Encontrados</md-button>
    </md-toolbar>
</div>
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




export default {

}
</script>

<style>
	
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
				  color: white;
				  text-align: center;
				  padding:8px 12px;
				  text-decoration: none;
				}	


			
				
				</style>
        