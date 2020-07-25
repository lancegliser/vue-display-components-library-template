import {
  isBrowser,
  hasPromiseSupport,
  hasMutationObserverSupport,
  getNoWarn
} from "./env";

/**
 * Log a warning message to the console with BootstrapVue formatting
 */
export const warn = (
  message: string,
  source: string | undefined = undefined
) => {
  if (!getNoWarn()) {
    console.warn(
      `[TorchDisplayComponents warn]: ${source ? `${source} - ` : ""}${message}`
    );
  }
};

/**
 * Warn when no Promise support is given
 */
export const warnNotClient = (source: string) => {
  if (isBrowser) {
    return false;
  } else {
    warn(`${source}: Can not be called during SSR.`);
    return true;
  }
};

/**
 * Warn when no Promise support is given
 */
export const warnNoPromiseSupport = (source: string) => {
  if (hasPromiseSupport) {
    return false;
  } else {
    warn(`${source}: Requires Promise support.`);
    return true;
  }
};

/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */
export const warnNoMutationObserverSupport = (source: string) => {
  if (hasMutationObserverSupport) {
    return false;
  } else {
    warn(`${source}: Requires MutationObserver support.`);
    return true;
  }
};
