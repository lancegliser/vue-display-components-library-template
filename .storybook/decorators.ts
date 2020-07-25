import { DecoratorFunction } from "@storybook/addons/dist/types";
import { withA11y } from "@storybook/addon-a11y";
// You'd need to make your own of course
import App from "../src/components/App/App/App.vue";
// @ts-ignore - Types are not provided, boo.
import StoryRouter from "storybook-vue-router";

// Provides a Vue router, allowing <RouterLink> to be used in stories.
// Actions will be created in the console based on the <RouterLinks> behaviors.
export const withRouter: DecoratorFunction<any> = StoryRouter();

// Provides a method for wrapping all your stories into your base application for styling.
export const withApp: DecoratorFunction<any> = (story: Function) => ({
  components: { App, story },
  template: `
    <App>
      <story />
    </App>`,
});

// Provides padding on stories as would naturally be done,
// but you can layer inside app to get a full width.
export const withPadding: DecoratorFunction<any> = (story: Function) => ({
  components: { story },
  template: `
    <div class="p-4 h-100 overflow-auto">
      <story />
    </div>`,
});

// Provides a simple export to do all the above with less work.
// Note that the order here is reversed. Wrapping is applies start to end.
export const withDefaultDecorators = [
  withPadding,
  withApp,
  withRouter,
  withA11y,
];
