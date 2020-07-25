import { DecoratorFunction } from "@storybook/addons/dist/types";
import { withA11y } from "@storybook/addon-a11y";
import TApp from "../src/components/TApp/TApp/TApp.vue";
// @ts-ignore
import StoryRouter from "storybook-vue-router";

export const withRouter: DecoratorFunction<any> = StoryRouter();

export const withApp: DecoratorFunction<any> = (story: Function) => ({
  components: { TApp, story },
  template: `
    <TApp>
      <story />
    </TApp>`,
});

export const withPadding: DecoratorFunction<any> = (story: Function) => ({
  components: { story },
  template: `
    <div class="p-4 h-100 overflow-auto">
      <story />
    </div>`,
});

// Note that the order here is reversed. Wrapping is applies start to end.
export const withDefaultDecorators = [
  withPadding,
  withApp,
  withRouter,
  withA11y,
];
