import OurVue from "./vue";
import { setConfig } from "./config-set";
import { hasWindowSupport, isJSDOM } from "./env";
import { warn } from "./warn";
import { VueConstructor } from "vue";
import { DirectiveFunction, DirectiveOptions } from "vue/types/options";
import { PluginFunction, PluginObject } from "vue/types/plugin";
import { BootstrapVue } from "bootstrap-vue";

export const installBootstrap = (() => {
  let bootstrapInstalled = false;

  return (Vue: VueConstructor) => {
    if (!bootstrapInstalled) {
      bootstrapInstalled = true;
      Vue.use(BootstrapVue);
    }
  };
})();

/**
 * Checks if there are multiple instances of Vue, and warns (once) about possible issues.
 * @param {object} Vue
 */
export const checkMultipleVue = (() => {
  let checkMultipleVueWarned = false;

  const MULTIPLE_VUE_WARNING = [
    "Multiple instances of Vue detected!",
    "You may need to set up an alias for Vue in your bundler config.",
    "See: https://bootstrap-vue.org/docs#using-module-bundlers",
  ].join("\n");

  return (Vue: VueConstructor) => {
    if (!checkMultipleVueWarned && OurVue !== Vue && !isJSDOM) {
      warn(MULTIPLE_VUE_WARNING);
    }
    checkMultipleVueWarned = true;
  };
})();

interface IInstallFactory {
  components?: VueConstructor[];
  directives?: Record<string, DirectiveOptions | DirectiveFunction>;
  plugins?: Record<string, any>;
  postInstall?: (Vue: VueConstructor) => void;
}

/**
 * Plugin install factory function.
 */
export const installFactory = (options: IInstallFactory = {}) => {
  const { components, directives, plugins, postInstall } = options;
  const install = (Vue: VueConstructor, config: any = {}) => {
    if (install.installed) {
      return;
    }
    install.installed = true;
    installBootstrap(Vue);
    checkMultipleVue(Vue);

    setConfig(config, Vue);
    if (components) {
      registerComponents(Vue, components);
    }
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);

    if (postInstall) {
      postInstall(Vue);
    }
  };

  install.installed = false;
  return install;
};

/**
 * Plugin install factory function (no plugin config option).
 */
export const installFactoryNoConfig = (
  options: IInstallFactory = {}
): Function => {
  const { components, directives, plugins } = options;
  const install = (Vue: VueConstructor) => {
    if (install.installed) {
      return;
    }
    install.installed = true;
    checkMultipleVue(Vue);
    if (components) {
      registerComponents(Vue, components);
    }
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;

  return install;
};

type pluginFactoryType<T> = (
  options: IInstallFactory,
  extend?: any
) => PluginObject<T>;

/**
 * Plugin object factory function.
 */
export const pluginFactory: pluginFactoryType<any> = (
  options = {},
  extend = {}
) => ({
  ...extend,
  install: installFactory(options),
});

/**
 * Plugin object factory function (no config option).
 */
export const pluginFactoryNoConfig: pluginFactoryType<any> = (
  options = {},
  extend = {}
) => ({
  ...extend,
  install: installFactoryNoConfig(options),
});

/**
 * Load a group of plugins.
 */
export const registerPlugins = (
  Vue: VueConstructor,
  plugins: Record<string, PluginObject<any> | PluginFunction<any>> = {}
) => {
  Object.values(plugins).forEach(Vue.use);
};

/**
 * Load a component.
 */
export const registerComponent = (
  Vue: VueConstructor,
  name: string,
  def: VueConstructor
) => {
  if (!Vue) {
    throw new Error("Vue instance is undefined");
  }

  if (!name) {
    throw new Error("name is undefined");
  }

  if (!def) {
    throw new Error("Component def is undefined");
  }

  Vue.component(name, def);
};

/**
 * Load a group of components.
 */
export const registerComponents = (
  Vue: VueConstructor,
  components: VueConstructor[]
) => {
  components.forEach((component) => {
    registerComponent(Vue, component.name, component);
  });
};

/**
 * Load a directive.
 */
export const registerDirective = (
  Vue: VueConstructor,
  name: string,
  def: DirectiveOptions | DirectiveFunction
) => {
  if (!Vue) {
    throw new Error("Vue instance is undefined");
  }

  if (!name) {
    throw new Error("name is undefined");
  }

  if (!def) {
    throw new Error("Component def is undefined");
  }

  // Ensure that any leading T is removed from the
  // name, as Vue adds it automatically
  Vue.directive(name.replace(/^VT/, "T"), def);
};

/**
 * Load a group of directives.
 */
export const registerDirectives = (
  Vue: VueConstructor,
  directives: Record<string, DirectiveOptions | DirectiveFunction> = {}
) => {
  Object.keys(directives).forEach((directive) => {
    const definition = directives[directive];
    registerDirective(Vue, directive, definition);
  });
};

/**
 * Install plugin if window.Vue available
 */
export const vueUse = (VuePlugin: PluginObject<any> | PluginFunction<any>) => {
  /* istanbul ignore next */
  if (hasWindowSupport && window.Vue) {
    window.Vue.use(VuePlugin);
  }
  // @ts-expect-error
  if (hasWindowSupport && VuePlugin.NAME) {
    // @ts-expect-error
    window[VuePlugin.NAME] = VuePlugin;
  }
};
