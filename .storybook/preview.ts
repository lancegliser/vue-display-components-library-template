import { configure } from "@storybook/vue";
import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import "../src/scss/index.scss";

Vue.use(VueCompositionApi);
Vue.use(BootstrapVue);

const loaderFn = () => {
  const allExports = [require("./welcome.stories.ts")];
  const req = require.context("../src", true, /\.stories\.ts$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
