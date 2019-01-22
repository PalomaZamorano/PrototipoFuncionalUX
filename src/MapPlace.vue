<template>
      <v-layout id="map" align-center justify-center column fill-height/>
</template>
<style>
#map { height: 600px; width: 360px;}
</style>
<script>
/*
* Mapa coroplético basado en la población de las regiones de Chile
 incluyendo tres funciones distintas de creación de escala de colores
* Basado en https://leafletjs.com/examples/choropleth/
* Explicación de escalas en https://roadtolarissa.com/coloring-maps/
* Colores obtenidos de https://bl.ocks.org/emeeks/8cdec64ed6daf955830fa723252a4ab3
* Archivos GeoJson tienen esta estructura:
  {
    "type": "Feature",
    "properties": {
        "name": "Alabama",
        "density": 94.65
    },
    "geometry": ...
    ...
  }
*/
import Vuetify from 'vuetify'
import axios from 'axios';
import L from 'leaflet';
require('leaflet/dist/leaflet.css'); //css se configua en webpack.config con { test: /\.css$/, loader: "style-loader!css-loader" }
// Datos geográficos de chile desde https://github.com/jlhonora/geo
import santiago from './santiago.json'; //solo como ejemplo, datos deben ser obtenidos desde servicio rest
export default{
  data(){
    return {
      publi:[]
    }
  },
  mounted(){
    var map = L.map('map', {
      center:[-33.449, -70.687],
      zoom: 10
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([-33.449,-70.687]).addTo(map);
    axios.get("http://localhost:3000/publications").then(response => {
      this.publi = response.data;
      for(var x=0; x<response.data.length; x++){
        console.log(response.data[x].geoloca);
        L.marker(response.data[x].geoloca).bindPopup("<b>Nombre: "+response.data[x].firstName+"</b><br>Fecha extravio: "+response.data[x].age).openPopup().addTo(map);  
      }
    });
  }
}
//L.geoJson(santiago, {style: style}).addTo(map);
</script>