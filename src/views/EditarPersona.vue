<template>
  <Titulo mensaje="Editando informacion" />
  <div class="container">
    <hr>

    <FormEditar />
    <hr>
    <h5>Lista de Personas (Modificar)</h5>
    
    <div v-for="(per, index) in personas" :key="index">
      <div class="container overflow-hiden">
        <div class="row">
          <div class="col">Nombre: {{ per.nombre }}</div>
          <div class="col">Apellido Paterno: {{ per.apellidop }}</div>
          <div class="col">Apellido Materno: {{ per.apellidom }}</div>
          <div class="col">Edad: {{ per.edad }}</div>
          <div class="col">Lenguaje(s) dominante(s): {{ per.lengujes }}</div>
          <div class="col">Sexo: {{ per.sexo }}</div>
          <Editar @click="actionSelecEditarPersona(index)" />
          <hr>
        </div>
      </div>
      <hr>
    </div>

  </div>
</template>

<script>
import Titulo from '@/components/Titulo.vue'

import FormEditar from '@/components/FormEditar.vue'
import Editar from '@/components/Editar.vue'


import { mapActions, mapState } from 'vuex'
undefined


export default {
  data() {
    return {      
    }
  },
  components: {
    Titulo,
    
    FormEditar,
    Editar,
},
  computed: {
    ...mapState(['personas'])
  },
  methods: {

    ...mapActions(['actionEditarPersona'])
    ,
    ...mapActions(['actionSelecEditarPersona'])

  }
}
</script>

<style>
</style>