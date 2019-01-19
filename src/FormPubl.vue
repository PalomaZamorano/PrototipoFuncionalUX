<template>
  <div class=" col-12-narrower">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Ficha Mascota perdida </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">Nombre Mascota</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">El nombre de la mascota es requerida</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Nombre inválido (debe poseer un min de tres carácteres)</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Comuna extravío</label>
                <md-select name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" >
                <md-option  v-for="(comuna,index) in comunas" :value="comuna" :key="`comuna-${index}`" >{{comuna}}</md-option>
                </md-select>

                <span class="md-error" v-if="!$v.form.lastName.required">La comuna de extravío es requerida</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Comuna inválida</span>
              </md-field>
            </div>
          </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')" >
                <label for="gender">Raza</label>
                <md-select name="gender" id="gender" autocomplete="family-name" v-model="form.gender" md-dense :disabled="sending">
                  <md-option  v-for="(raza,index) in razas" :value="raza" :key="`raza-${index}`" >{{raza}}</md-option>
                </md-select>
                <span class="md-error">La raza de la mascota es requerida</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field  :class="getValidationClass('age')">
                <md-input type="date" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.age.required">La fecha de extravío es requerida</span>
              </md-field>
            </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Descripción</label>
            <md-textarea  md-autogrow name="email" id="email" v-model="form.email" autocomplete="email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">La descripción de el extravío es requerida</span>
          </md-field>

        <md-field :class="getValidationClass('phone')">
            <label for="phone">Contacto (ej: 967529705)</label>
            <md-input type="number" name="phone" id="phone" autocomplete="phone" v-model="form.phone" :disabled="sending"  />
            <span class="md-error" v-if="!$v.form.phone.minlength">Ejemplo: 97864238</span>
            <span class="md-error" v-if="!$v.form.phone.maxlength">Ejemplo: 97864238</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary"  :disabled="sending">Enviar!</md-button>
        </md-card-actions>
      </md-card>

      
      <md-snackbar :md-active.sync="userSaved">La ficha se ha publicado correctamente! </md-snackbar>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

Vue.use(VueMaterial)
import axios from 'axios';


  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        photo:"https://cdni.rt.com/actualidad/public_images/2018.03/article/5aa7a62a08f3d93d608b4567.jpg"
      },
      comunas:['Cerrillos','Cerro Navia','Conchalí','El Bosque','Estación Central',
              'Huechuraba','Independencia','La Cisterna','La Granja','La Florida','La Pintana','La Reina','Las Condes','Lo Barnechea','Lo Espejo','Lo Prado','Macul',
              'Maipú','Ñuñoa','Pedro Aguirre Cerda','Peñalolén','Providencia','Pudahuel','Quilicura','Quinta Normal','Recoleta','Renca','San Miguel','San Joaquín',
              'San Ramón','Santiago','Vitacura'],
        razas: ["Affenpinscher","Airedale terrier","Akita Americano", "Akita Inu","Alano español","Alaskan malamute"
                ,"American Hairless terrier","American Staffordshire Terrier","Antiguo Perro Pastor Inglés","Bóxer,Bardino (Perro majorero)"
                ,"Basenji,Basset hound","Beagle","Beauceron","Bichón maltés","Bichon frisé","Bloodhound","Border collie","Borzoi"
                ,"Boston terrier","Braco alemán de pelo corto","Braco alemán de pelo duro","Braco de Auvernia","Braco de Saint Germain"
                ,"Braco de Weimar","Braco francés","Braco húngaro","Bull Terrier","Bulldog americano"
                ,"Bulldog francés","Bulldog inglés","Bullmastiff"
                ,"Cão de Castro Laboreiro","Cão de Fila de São Miguel","Can de palleiro,Caniche"
                ,"Chihuahueño","Chow chow","Clumber spaniel","Cocker spaniel americano","Cocker spaniel inglés","Collie","Collie barbudo"
                ,"Crestado Chino","Dálmata","Dachshund","Dobermann","Dogo argentino","Dogo de burdeos","Dogo guatemalteco","Epagneul papillón"
                ,"Flat-Coated Retriever","Fox Terrier","Galgo español","Galgo húngaro","Galgo inglés","Galgo italiano","Gegar colombiano"
                ,"Golden retriever","Gran danés","Greyhound","Grifón belga","Husky siberiano","Jack Russell Terrier","Keeshond"
                ,"Kerry blue terrier","Komondor","Kuvasz","Labrador","Lebrel afgano","Lhasa apso","Lobo de saarloos","Maltés","Manchester terrier"
                ,"Mastín afgano","Mastín del Pirineo","Mastín español","Mastín inglés","Mastín napolitano","Mastín tibetano","Mucuchies"
                ,"Ovejero magallánico","Pastor alemán","Pastor belga","Pastor blanco suizo","Pastor catalán","Pastor croata","Pastor de los Pirineos"
                ,"Pastor garafiano","Pastor holandés","Pastor leonés","Pastor mallorquín","Pastor peruano Chiribaya","Pastor vasco"
                ,"Pekinés","Pembroke Welsh Corgi","Pequeño Lebrel Italiano","Perdiguero francés","Perdiguero portugués","Perro cimarrón uruguayo"
                ,"Perro de agua americano","Perro de agua español","Perro de agua irlandés","Perro de agua portugués","Perro de Montaña de los Pirineos"
                ,"Perro dogo mallorquín","Perro esquimal canadiense","Perro pastor de las islas Shetland","Perro peruano sin pelo"
                ,"Phalène","Pinscher alemán","Pinscher miniatura","Pitbull"
                ,"Pointer","Pomerania","Presa canario","Pug","Puli","Rafeiro do Alentejo","Ratonero bodeguero andaluz","Ratonero mallorquín"
                ,"Ratonero valenciano","Rhodesian Ridgeback","Rottweiler","Saluki","Samoyedo","San Bernardo","Sato","Schnauzer estándar","Schnauzer gigante"
                ,"Schnauzer miniatura","Setter inglés","Setter irlandés","Shar Pei","Shiba Inu","Shih Tzu","Siberian husky","Skye terrier"
                ,"Sussex spaniel","Terranova","Terrier alemán","Terrier australiano","Terrier brasileño","Terrier chileno"
                ,"Terrier escocés","Terrier galés","Terrier irlandés","Weimaraner","West Highland White Terrier","Whippet","Xoloitzcuintle"
                ,"Yorkshire terrie","Otro"]
                ,
      userSaved: false,
      sending: false,
      lastUser: null,
      publi:[]
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required        
        },
        gender: {
          required
        },
        email: {
          required
        },
        phone: {
          required,
          minLength: minLength(9),
          maxLength: maxLength(9)
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
          

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
        this.form.phone = null
      },
      saveUser () {
        this.$v.$touch()
        if (this.$v.$invalid ) {
          console.log(this.form.phone);
          return 
        }else{
        this.sending = true
        // Instead of this timeout, here you can call your API
         axios.post("http://localhost:3000/publications",this.form)
          .then(response => {
            this.publi = response.data;
            window.location.href = '/'

          });

        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)

        }
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>