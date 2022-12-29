<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
* {
  font-family: "DM Sans", sans-serif;
}

/* html,
body {
  min-height: 100vh;
  max-width: 100vw;
} */

html {
  box-sizing: border-box;
  font-size: 16px;
}

/* *,
*:before,
*:after {
  box-sizing: inherit;
} */

body {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
