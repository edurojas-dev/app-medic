<template>
  <div class="home">
    <div class="container">
      <card-template
        titulo="Sobre Profissional - TELA01"
        subtitulo="Dados Profissional"
        view="Form01"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardTemplate from "../components/CardTemplate.vue";
export default {
  name: "Home",
  components: {
    CardTemplate,
  },
};
</script>
<style scoped>
@media (max-width: 1000px) {
  .jumbotron {
    width: 100%;
    height: 85vh;
    position: absolute;
    bottom: -5% !important;
    left: 0;
    border-radius: 40px 40px 0 0;
  }
}
</style>
