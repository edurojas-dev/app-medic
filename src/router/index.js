import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cadastro from "../views/Cadastro.vue";
import Detalhe from "../views/Detalhe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/detalhe",
    name: "Detalhe",
    component: Detalhe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
