import copy from "rollup-plugin-copy";
// import typescript from '@rollup/plugin-typescript';
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies || {});
const peerDependencies = Object.keys(pkg.peerDependencies || {});
const external = [
  "vue",
  "@amcharts/amcharts4/core",
  "@amcharts/amcharts4/charts",
  "@amcharts/amcharts4/themes/dark",
  ...dependencies,
  ...peerDependencies,
];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: false,
    },
  ],
  plugins: [
    copy({
      targets: [{ src: "src/**/*.scss", dest: "dist" }],
      flatten: false,
    }),
    image(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    vue(),
  ],
  external,
};
