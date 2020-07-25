import Vue from "vue";
import { PlaceholderPlugin } from "./index";

describe("Placeholder", () => {
  describe("Plugin", () => {
    it("should call the install hook when run through Vue.use", () => {
      const installSpy = jest.spyOn(PlaceholderPlugin, "install");
      Vue.use(PlaceholderPlugin);
      expect(installSpy).toHaveBeenCalledTimes(1);
    });
  });
});
