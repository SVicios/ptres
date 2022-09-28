<template>
    <div class="alert alert-success ">
        <h3>{{mensaje}}</h3>
    </div>
    
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        mensaje: String
    }
}
</script>
    
<style>
    h3{
        color: peru;
    }
</style>