<template>
    <Titulo mensaje="Informacion personal"/>
    <hr>
    <form >
        <input type="text" placeholder=" Nombre(s)" class="form-control" v-model="persona.nombre" id="nombre"/>
        <input type="text" placeholder=" Apellido Paterno" class="form-control" v-model="persona.apellidop" id="apellidoP"/>
        <input type="text" placeholder=" Apellido Materno" class="form-control" v-model="persona.apellidom" id="apellidoM"/>
        <input type="number" placeholder=" Edad" class="form-control" v-model="persona.edad" id="edad"/>
        <h5> Lenguajes que domina:  </h5>
        <div class="my-2">
            <div class="btn-group " role="group" aria-label="Basic radio toggle button group">
                <input type="checkbox" class="btn-check" id="uno" value="JavaScript" v-model="persona.lengujes">
                <label for="uno" class="btn btn-outline-succes">JavaScript</label>

                <input type="checkbox" class="btn-check" id="dos" value="VueJs" v-model="persona.lengujes">
                <label for="dos" class="btn btn-outline-succes">VueJs</label>

                <input type="checkbox" class="btn-check" id="tres" value="Jjava" v-model="persona.lengujes">
                <label for="tres" class="btn btn-outline-succes">Java</label>

                <input type="checkbox" class="btn-check" id="cuatro" value="Lenguaje C" v-model="persona.lengujes">
                <label for="cuatro" class="btn btn-outline-succes">Lenguaje C</label>
            </div>
        </div>
        <h5> Sexo:  </h5>
        <div class="my-2">
            <div >
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Masculino" v-model="persona.sexo">
                <label class="form-check-label" for="flexRadioDefault1">&nbsp; Masculino</label>
            </div>
            
            <div>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Femenino" v-model="persona.sexo">
                <label class="form-check-label" for="flexRadioDefault2">&nbsp; Femenino</label>
            </div>
        </div>
    </form>
    <!-- {{ persona }} -->
    <hr>
    <Boton v-on:click="clear(persona)"/>
    <!-- <BotonMostrar v-on:click="actionEliminarPerson(persona)"/> -->
    <hr>
    <!-- Persona: {{$store.state.personas}} -->
    <hr>
    
</template>

<script>
import Titulo from '@/components/Titulo.vue';
import Boton from '@/components/Boton.vue';
import { mapActions, mapState } from 'vuex';
export default {
    data(){
        return{
            persona:{
                nombre:"",
                apellidop: "",
                apellidom: "",
                edad: "",
                lengujes: [],
                sexo: "",
            }
        }
    },
    components: {
    Titulo,
    Boton,
    // BotonMostrar
    },
    computed:{
        ...mapState(['personas'])//variables en
    },
    methods:{
        ...mapActions(['actionAgregarPersonas']),
        clear(persona){
            this.actionAgregarPersonas(persona);
            this.persona = {
                nombre:"",
                apellidop: "",
                apellidom: "",
                edad: "",
                lengujes: [],
                sexo: "",
            }
        }
        // ...mapActions(['actionEliminarPerson'])
    }
}
</script>



<style>
</style>