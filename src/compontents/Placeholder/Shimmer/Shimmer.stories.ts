import Shimmer from "./Shimmer.vue";
import { withDefaultDecorators } from "../../../../.storybook/decorators";

export default {
  title: "Placeholder/Shimmer",
  component: Shimmer,
  decorators: [...withDefaultDecorators],
};

export const Default = () => ({
  components: { Shimmer },
  template: `
    <div>
      <p>Shimmers provide the building blocks for <code>Skeleton</code> loading elements.</p>
      <t-shimmer class="mb-2" />
      <div class="d-flex mx-n2">
        <t-shimmer class="m-2" style="width: 5em;" />
        <t-shimmer class="m-2" style="width: 5em;" />
        <t-shimmer class="m-2" style="width: 5em;" />
      </div>
      <div class="d-flex mx-n2">
        <t-shimmer class="m-2" style="width: 100px; height: 100px" />
        <t-shimmer class="m-2" style="width: 100px; height: 100px;" />
      </div>
    </div>`,
});
