<template>
  <div>

    <div v-for="(item, index) in personas" :key="index">
      <div v-if="index == editarA">
        <form>
          <input type="text" placeholder="Nombre" class="form-control" v-model="item.nombre" id="nombre" />
          <input type="text" placeholder="Apellido Paterno" class="form-control" v-model="item.apellidop"
            id="apellidoP" />
          <input type="text" placeholder="Apellido Materno" class="form-control" v-model="item.apellidom"
            id="apellidoM" />
          <input type="number" placeholder="Edad" class="form-control" v-model="item.edad" id="edad" />
          <h5> Lenguajes que domina: </h5>
          <div class="my-2">
            <div class="btn-group " role="group" aria-label="Basic radio toggle button group">
              <input type="checkbox" class="btn-check" id="uno" value="JavaScript" v-model="item.lengujes">
              <label for="uno" class="btn btn-outline-succes">JavaScript</label>

              <input type="checkbox" class="btn-check" id="dos" value="VueJs" v-model="item.lengujes">
              <label for="dos" class="btn btn-outline-succes">VueJs</label>

              <input type="checkbox" class="btn-check" id="tres" value="Jjava" v-model="item.lengujes">
              <label for="tres" class="btn btn-outline-succes">Java</label>

              <input type="checkbox" class="btn-check" id="cuatro" value="Lenguaje C" v-model="item.lengujes">
              <label for="cuatro" class="btn btn-outline-succes">Lenguaje C</label>
            </div>
          </div>
          <h5> Sexo: </h5>
          <div class="my-2">
            <div>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                value="Masculino" v-model="item.sexo">
              <label class="form-check-label" for="flexRadioDefault1">&nbsp; Masculino</label>
            </div>

            <div>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                value="Femenino" v-model="item.sexo">
              <label class="form-check-label" for="flexRadioDefault2">&nbsp; Femenino</label>
            </div>
          </div>
        </form>
        <Boton
          @click="tratar({ nombre: item.nombre, apellidop: item.apellidop, apellidom: item.apellidom, edad: item.edad, lengujes: item.lengujes, sexo: item.sexo })" />
      </div>
    </div>



  </div>
</template>

<script>



import { mapActions, mapState } from 'vuex'
import Boton from './Boton.vue'


export default {
  data() {
    return {
      personaT: {
        id: Number,
        nombre: "",
        apellidop: "",
        apellidom: "",
        edad: "",
        lengujes: [],
        sexo: "",
      },


    }
  },
  components: {
    Boton
  },
  computed: {
    ...mapState(['personas']),
    ...mapState(['editarA'])
  },
  methods: {
    ...mapActions(['actionEditarPersona']),
    ...mapActions(['actionSelecEditarPersona'])
    ,
    tratar(obj) {
      alert('en tratar')

      actionEditarPersona({ obj, editarA })
    }

  },

}
</script>

<style>
</style>