<template>
  <div class="cadastro">
    <router-link class="icone animate__animated animate__fadeIn" to="/cadastro">
      <i class="fas fa-chevron-left"></i>
    </router-link>
    <div class="container">
      <card-template view="Form02" showItem="true" />
    </div>
  </div>
</template>
<script>
import CardTemplate from "../components/CardTemplate.vue";
export default {
  components: {
    CardTemplate,
  },
};
</script>
