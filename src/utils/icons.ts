import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog as faCogDuotone } from "@fortawesome/pro-duotone-svg-icons";

library.add(faCogDuotone);

export const ICONS = {
  loading: faCogDuotone,
};

export default ICONS;
export const useIcons = () => ({ ICONS });
