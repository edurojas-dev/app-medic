<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-5 page-title">Sobre o atendimento</h4>
        <h5 class="display-6 form-title">Detalhes do atendimento</h5>
        <form>
          <div class="form-group">
            <label>Especialidade principal*</label>
            <select class="form-control" aria-label="Default select example">
              <!-- <option selected>Selecione uma Especialidade</option> -->
              <option :value="e.nome" v-for="e in especialista" :key="e">
                {{ e.nome }}
              </option>
            </select>
          </div>
          <label>Informe o preço da consulta*</label>
          <div class="input-group mb-3 align-items-center">
            <div class="input-group-prepend">
              <span class="input-group-text">R$</span>
            </div>
            <input
              type="text"
              class="form-control priceInput"
              aria-label="Quantia"
              placeholder="Valor"
            />
          </div>
          <div class="form-group">
            <label>Formas de pagamentos da consulta*</label>
            <div class="select-case">
              <input type="checkbox" class="checkboxInput" /> Em dinheiro
            </div>
            <div class="select-case">
              <input type="checkbox" class="checkboxInput" /> Pix
            </div>
            <div class="select-case">
              <input type="checkbox" class="checkboxInput" /> Cartão de crédito
            </div>
          </div>
        </form>
        <div class="mb-3">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p class="text-right">2 de 2</p>
        </div>
        <router-link
          to="/"
          class="btn btn-dark btn-lg text-white next-link"
          style="text-decoration: none"
        >
          PRÓXIMO
        </router-link>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img
          :src="require('../assets/img/img2.png')"
          alt="img1"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import api from "../api.js";
export default {
  name: "Form02",
  data() {
    return {
      especialista: null,
    };
  },
  created() {
    axios.get(api.especialidades).then((resp) => {
      this.especialista = resp.data;
    });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap");
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
input::placeholder,
.select-case {
  color: #282828;
  font-family: "Open Sans", sans-serif;
}
label {
  font-size: 0.9rem;
}
input::placeholder {
  color: #8a8a8a;
}
.select-case {
  background-color: #f9f9f9;
  margin-top: 5px;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px 5px;
  box-shadow: -1px 3px 1px #95959557;
}
.checkboxInput {
  margin: 0px 35px;
  box-shadow: 0px 0px 1px #dbdbdb;
}
.priceInput {
  width: 75%;
  height: calc(2.25rem + 0px);
  padding: 0 5px;
}
.input-group-prepend span {
  background-color: var(--primary-0);
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: #fff;
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
  }
}
</style>
