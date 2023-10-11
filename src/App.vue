<script setup>
import LayoutDefault from "./layouts/default.vue";
import Banner from "./components/Banner.vue";
import NavMenu from "./components/NavMenu.vue";
</script>

<template>
  <LayoutDefault>
    <Banner />
    <div class="container">
      <NavMenu />
    </div>
  </LayoutDefault>
</template>

<script></script>

<style lang="scss" scoped></style>
