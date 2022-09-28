<template>
  <div class="home">
    <h1>
      <Titulo mensaje="BIENVENIDO" />
    </h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga iste quaerat laboriosam laudantium
      exercitationem esse repellendus quis voluptate quod neque qui, incidunt dolores quidem atque facilis eligendi ex
      cupiditate.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Titulo from '@/components/Titulo.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Titulo,
  }
}
</script>
