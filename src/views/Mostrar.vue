<template>
  <div class="mostrar">
    <Titulo mensaje="Mostrando informacion"/>
    <hr>
    <div v-for="(per,index) in personas" :key="index">
        <div class="container overflow-hiden">
          <div class="row">
            <div class="col">Nombre: {{ per.nombre }}</div>
            <div class="col">Apellido Paterno: {{ per.apellidop }}</div>
            <div class="col">Apellido Materno: {{ per.apellidom }}</div>
            <div class="col">Edad: {{ per.edad }}</div>
            <div class="col">Lenguaje(s) dominante(s): {{ per.lengujes }}</div>
            <div class="col">Sexo: {{ per.sexo }}</div>
          </div>
        </div>
        <div>
          <BotonMostrar v-on:click="actionEliminarPerson(index)"/>&nbsp; &nbsp;
           <!-- <Editar @click="actionEditarPersona(index)"/>
              {{ index }} -->
              <!--div -->
            <!-- <Editar /> -->
            
        </div>
          

          <hr>

        <!-- </div> -->

    </div>
    <!-- {{ persona }} -->
  </div>
</template>

<script>
import Titulo from '@/components/Titulo.vue'
import { mapActions, mapState } from 'vuex'
import Pie from '@/components/Pie.vue'
import BotonMostrar from '@/components/BotonMostrar.vue'
import Editar from '@/components/Editar.vue'
export default {
  data(){
    return {
      
    }
  },
  components: {
    Titulo,
    Pie,
    BotonMostrar,
    Editar
  },
  computed:{
    ...mapState(['personas'])
  },
  methods: {
    ...mapActions(['actionEliminarPerson']),
    ...mapActions(['actionEditarPersona'])
  }
}
</script>

<style>

</style>
