import { configure } from "@storybook/vue";
import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import "../src/scss/index.scss";

// Ensure Vue is setup to use your global plugins
Vue.use(VueCompositionApi);
Vue.use(BootstrapVue);

const loaderFn = () => {
  // Import the welcome story first so you have a place to provide guidance on Storybook boot
  const allExports = [require("./welcome.stories.ts")];
  // Require all the stories in src after that
  const req = require.context("../src", true, /\.stories\.ts$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
