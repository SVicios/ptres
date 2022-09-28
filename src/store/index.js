import { createStore } from 'vuex'

export default createStore({
  state: {
    personas: [],//areglo de personas
    editarA: Number
  },
  getters: {
  },
  mutations: {
    agregarPersona(state, p){//guarda personas
      state.personas.push(p)
      // alert(' PERSONA AGREGADA')
      //state.personas = state.personas.push(p)
    },
    eliminarPersona(state, p){
      state.personas.splice(p,1);
    },

    editarPersona(state, e){
      alert('editando')
      alert(JSON.stringify(e))
      // alert('editando')
      let pt = JSON.stringify(e)
      // alert(pt)

      const {personaT: p, editarA: i} = e

      alert('persona modificada')
      alert(JSON.stringify(p))

      alert('id')
      alert(i)

      //let tp = JSON.stringify(p)
      state.personas[i] = p
      // alert(JSON.stringify(state.personas[i]))
      alert('Todas las personas')
       alert(JSON.stringify(state.personas))

    },

    selecEditarPersona(state, e){
      state.editarA = e
      alert(state.editarA)
    }
  },
  actions: {
    actionAgregarPersonas({commit}, p){
      commit("agregarPersona",p)
      
    },
    actionEliminarPerson({commit}, index){
      commit("eliminarPersona", index)
    },
    actionSelecEditarPersona({commit}, index){
      commit('selecEditarPersona', index)
    }
    ,
    actionEditarPersona({commit}, e){
      commit("editarPersona", e)
    }
  },
})
