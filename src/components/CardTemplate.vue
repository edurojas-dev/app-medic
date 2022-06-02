<template>
  <div class="jumbotron animate__animated animate__fadeIn">
    <section v-if="showItem">
      <component :is="view" style="height: 100%"></component>
    </section>
    <section
      v-else
      style="height: 100%"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        :src="require('../assets/img/img2.png')"
        alt="intro"
        class="img-fluid"
        width="auto"
      />
      <h1 class="text-center display-6 mt-5">Bem-vindo ao AppMedic</h1>
      <router-link
        class="btn btn-dark btn-lg text-white mt-5 next-link"
        to="/cadastro"
      >
        Iniciar Cadastro
      </router-link>
    </section>
  </div>
</template>
<script>
import Form01 from "./Form01.vue";
import Form02 from "./Form02.vue";

import "animate.css";
export default {
  components: {
    Form01,
    Form02,
  },
  props: {
    view: String,
    showItem: { default: false, type: Boolean },
  },
};
</script>
<style scoped>
h1 {
  font-family: "Comfortaa", cursive;
  font-weight: 600;
  color: var(--secondary-0);
  color: var(--primary-0);
}
.jumbotron {
  width: 1100px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 5px 8px #00000042;
  background-color: var(--secondary-0);
  padding: 2.5rem 4rem;
  margin-bottom: 0;
}
.next-link {
  width: 70%;
  text-decoration: none;
  font-size: 1.25rem;
  border-radius: 20px;
  padding: 10px 0;
  line-height: 1;
  background-color: var(--primary-0);
  font-family: "Comfortaa", cursive;
  font-weight: 500;
}

@media (max-width: 1000px) {
  .jumbotron {
    width: 100%;
    height: 85vh;
    position: absolute;
    bottom: -1% !important;
    left: 0;
    border-radius: 40px 40px 0 0;
  }
}
</style>
