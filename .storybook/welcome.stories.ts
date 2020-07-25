import { linkTo } from "@storybook/addon-links";

// @ts-expect-error
import Welcome from "./Welcome.vue";
import { withDefaultDecorators } from "./decorators";

export default {
  title: "Welcome",
  component: Welcome,
  decorators: [...withDefaultDecorators],
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") },
});
