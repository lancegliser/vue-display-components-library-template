import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // @ts-expect-error
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
