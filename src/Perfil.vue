<template>
 <div class="row">
 <div >
     <br/>
     <br/>
     <br/>
     <br/>
      <b-card-group deck  id="cosa">
        <b-card img-src="http://siempremujer.com/imgs/images/image-91598.jpg"
                img-alt="Card image"
                img-top
               >
            <b-list-group flush>
            <b-list-group-item> <strong>Nombre:</strong> Paola Andrade </b-list-group-item>
            <b-list-group-item>  <strong>Correo: </strong> Paola@mail.com</b-list-group-item>
            <b-list-group-item>  <strong>Contacto: </strong> 978439165 </b-list-group-item>
        </b-list-group>
        </b-card>
    </b-card-group>
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
  }
}
</script>

<style lang="scss" scoped>
  #cosa{
       height: auto;
       display: block;
       margin-left: auto;
       margin-right: auto;
       height: 50%;
       width: 80%;
    }
  .responsive {
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
</style>
