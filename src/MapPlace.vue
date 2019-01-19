<template>
  <div class="row">

    <div class="col">
        <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 550px;">
      <!--<gmap-marker
        :key="index"
        v-for="(m, index) in markers"   
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>-->
    </gmap-map>

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
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(ElementUI);
Vue.use(VueMaterial)

export default {
  name: "Map",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>