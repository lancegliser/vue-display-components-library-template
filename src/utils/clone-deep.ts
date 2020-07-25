import { isArray, isPlainObject } from "./inspect";
import { keys } from "./object";

export const cloneDeep = (
  obj: Object | Object[],
  defaultValue = obj
): Object => {
  if (isArray(obj)) {
    // @ts-ignore
    return obj.reduce((result, val) => [...result, cloneDeep(val, val)], []);
  }
  if (isPlainObject(obj)) {
    return keys(obj).reduce(
      (result, key) => ({
        ...result,
        // @ts-expect-error
        [key]: cloneDeep(obj[key], obj[key])
      }),
      {}
    );
  }
  return defaultValue;
};

export default cloneDeep;
