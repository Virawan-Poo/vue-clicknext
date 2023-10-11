<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <slot />
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style lang="scss" scoped></style>
