<template>
  <div class="row">

    <div class="col-6 col-12-narrower">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QRbAm-HvLlVuDqXq-Xf9d1yywpv_wzXA2Ghga-38VqqzXh3pmQ" alt="Avatar">
        </md-avatar>

        <div class="md-title">Title goes here</div>
        <br/>
      </md-card-header>

      
      <md-card-media>
        <img src="https://s3-eu-west-1.amazonaws.com/barkibu-blog/blog+images/mi-perro-tiene-hipo-muy-seguido-que-le-pasa/perros-hipo-2.jpg" class="responsive" alt="Norway">
      </md-card-media>
        <br/>
      <div class="well well-sm"> 
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
       
      </md-card-content>

      <md-card-actions>
         
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


export default {
  name: 'Media'
}
</script>

