import copy from "rollup-plugin-copy";
// import typescript from '@rollup/plugin-typescript';
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

// Grab what's easily idenfified as external from the package names
const dependencies = Object.keys(pkg.dependencies || {});
const peerDependencies = Object.keys(pkg.peerDependencies || {});
// Create your additions into the mix in an array
const external = [
  "vue",
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
    // A pattern if you keep scss files to push over to dist
    // copy({
    //   targets: [{ src: "src/**/*.scss", dest: "dist" }],
    //   flatten: false,
    // }),
    image(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    vue(),
  ],
  external,
};
