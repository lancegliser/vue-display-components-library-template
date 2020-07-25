<template>
  <div class="shimmer" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Shimmer",
});
</script>

<style lang="scss" scoped>
.shimmer {
  height: 0.75em;
  line-height: 1em;
  animation: shimmer 2s infinite;
  border-radius: 0.25em;
  background: linear-gradient(
    to right,
    var(--gray-600) 4%,
    var(--gray-700) 25%,
    var(--gray-600) 36%
  );
  background-size: 500px 100%;
  opacity: 0.4;
}

@keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}
</style>
