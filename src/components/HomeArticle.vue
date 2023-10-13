<script setup>
import newsCard from "./newsCard.vue";
</script>

<template>
  <div class="article-wrap">
    <newsCard :jsonData="jsonData" :show="show" />
  </div>
</template>

<script>
export default {
  props: ["jsonData", "show"],
};
</script>

<style lang="scss"></style>
