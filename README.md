# Vue display components

> This package provides components to be imported and used in Vue JS display work
> along with a playground to work in building them through Jest and Storybook.

# Installation

Install the service in your own project

```
npm install @my-organization/vue-display-components
```

Install the global dependencies:

`main.ts`

```typescript
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import { BootstrapVue } from "bootstrap-vue";
import "../scss/index.scss";

Vue.use(VueCompositionApi);
Vue.use(BootstrapVue);
```

```scss
@import "node_modules/@my-organization/vue-display-components/dist/scss/index";
```

# Usage

You may choose to import all display components globally into your Vue instance
on a per plugin basis:

`main.ts`

```ts
import Vue from "vue";
// All components and directives specific to a group such as page.
import { PlaceholderPlugin } from "@my-organization/vue-display-components";
Vue.use(TPlaceholderPlugin);
```

Or, directly into your component as desired to limit overhead:

`compontent.vue`

```vue
<template>
    <Shimmer />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { Shimmer } from "@my-organization/vue-display-components";
export default defineComponent({
    components: {
        Shimmer,
    }
});
</script>
```
