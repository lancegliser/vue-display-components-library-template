// --- Static ---

// @ts-expect-error
export const from = (...args: any) => Array.from(...args);
export const isArray = (val: any) => Array.isArray(val);

// --- Instance ---

export const arrayIncludes = (array: any[], value: any) =>
  array.indexOf(value) !== -1;
export const concat = (...args: any[]) =>
  Array.prototype.concat.apply([], args);
