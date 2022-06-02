<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-5 page-title">Sobre o Profissional</h4>
        <h5 class="display-6 form-title">Dados do Profissional</h5>
        <form>
          <!--Name-->
          <div class="form-group first-group">
            <label for="formGroupExampleInput">Nome Completo*</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite o Nome Completo"
            />
          </div>

          <!--CPF-->
          <div class="form-group formGroupExampleInput2">
            <label>CPF/CNPJ*</label>
            <the-mask
              :mask="['###.###.###-##', '##.###.###/####-##']"
              class="form-control"
              placeholder="Digite um CPF / CNPJ"
              v-mask="'###.###.###-##'"
              masked="true"
            />
          </div>

          <!--Tel-->
          <div class="form-group formGroupExampleInput2">
            <label>Número de Celular*</label>
            <the-mask
              :mask="['(##) ####-####', '(##) #####-####']"
              class="form-control"
              placeholder="(00) 0 0000-0000"
            />
          </div>

          <!--City-->
          <div class="flex-group d-flex justify-content-between">
            <div class="form-group formGroupExampleInput3">
              <label>Estado*</label>
              <select id="estado" class="form-control">
                <option value="" v-for="estado in UF" :key="estado">
                  {{ estado.sigla }}
                </option>
              </select>
            </div>
            <div class="form-group formGroupExampleInput3">
              <label>Cidade*</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Cidade"
              />
            </div>
          </div>
        </form>
        <div class="mb-3">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p class="text-right">1 de 2</p>
        </div>
        <router-link
          to="/detalhe"
          class="btn btn-dark btn-lg text-white next-link"
          style="text-decoration: none"
          >PRÓXIMO</router-link
        >
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img
          :src="require('../assets/img/img1.png')"
          alt="img1"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { TheMask } from "vue-the-mask";
export default {
  name: "Form01",
  components: { TheMask },
  data() {
    return {
      UF: [
        { nome: "", sigla: "Selecione" },
        { nome: "Acre", sigla: "AC" },
        { nome: "Alagoas", sigla: "AL" },
        { nome: "Amapá", sigla: "AP" },
        { nome: "Amazonas", sigla: "AM" },
        { nome: "Bahia", sigla: "BA" },
        { nome: "Ceará", sigla: "CE" },
        { nome: "Distrito Federal", sigla: "DF" },
        { nome: "Espírito Santo", sigla: "ES" },
        { nome: "Goiás", sigla: "GO" },
        { nome: "Maranhão", sigla: "MA" },
        { nome: "Mato Grosso", sigla: "MT" },
        { nome: "Mato Grosso do Sul", sigla: "MS" },
        { nome: "Minas Gerais", sigla: "MG" },
        { nome: "Pará", sigla: "PA" },
        { nome: "Paraíba", sigla: "PB" },
        { nome: "Paraná", sigla: "PR" },
        { nome: "Pernambuco", sigla: "PE" },
        { nome: "Piauí", sigla: "PI" },
        { nome: "Rio de Janeiro", sigla: "RJ" },
        { nome: "Rio Grande do Norte", sigla: "RN" },
        { nome: "Rio Grande do Sul", sigla: "RS" },
        { nome: "Rondônia", sigla: "RO" },
        { nome: "Roraima", sigla: "RR" },
        { nome: "Santa Catarina", sigla: "SC" },
        { nome: "São Paulo", sigla: "SP" },
        { nome: "Sergipe", sigla: "SE" },
        { nome: "Tocantins", sigla: "TO" },
      ],
    };
  },
};
</script>
<style scoped>
.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0 20px;
  font-size: 0.9rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid var(--primary-0);
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group input {
  outline: none;
}
.first-group {
  margin: 0;
}

.formGroupExampleInput2 {
  width: 75%;
}

.formGroupExampleInput3 {
  width: 48%;
}

.page-title {
  font-family: "Comfortaa", cursive;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-0);
}
.form-title {
  font-weight: 600;
}

label,
.form-title,
input::placeholder {
  color: #282828;
  font-family: "Open Sans", sans-serif;
}

label {
  font-size: 0.9rem;
}

input::placeholder {
  color: #8a8a8a;
}
.next-link {
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;
  border-radius: 20px;
  padding: 10px 0;
  line-height: 1;
  background-color: var(--primary-0);
  font-family: "Comfortaa", cursive;
  font-weight: 500;
}

@media (max-width: 800px) {
  .col-md-6:nth-child(2) {
    display: none !important;
  }

  .jumbotron {
    width: 100%;
    height: 85vh;
    position: absolute;
    bottom: -5% !important;
    left: 0;
    border-radius: 40px 40px 0 0;
    padding: 0 5px !important;
  }

  .container {
    padding: 0 !important;
  }
}
</style>
