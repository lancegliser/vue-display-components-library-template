import Shimmer from "./Shimmer/Shimmer.vue";
import { pluginFactory } from "../../utils/plugins";

export const PlaceholderPlugin = pluginFactory({
  components: [
    Shimmer,
  ],
});

export {
  Shimmer,
};
