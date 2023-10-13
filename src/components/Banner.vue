<template>
  <div
    id="banner-slider"
    class="carousel slide banner-slider-wrap"
    data-bs-touch="true"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: data.id === 1 }"
        v-for="data in jsonData"
        :key="data.id"
      >
        <img :src="data.image" class="d-block w-100" :alt="data.imageAlt" />
      </div>
    </div>
    <button
      class="carousel-control-prev w-auto ms-4"
      type="button"
      data-bs-target="#banner-slider"
      data-bs-slide="prev"
    >
      <span class="icon-prev large" aria-hidden="true"></span>
    </button>
    <button
      class="carousel-control-next w-auto me-4"
      type="button"
      data-bs-target="#banner-slider"
      data-bs-slide="next"
    >
      <span class="icon-next large" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["jsonData"],
};
</script>

<style lang="scss" scoped>
.banner-slider-wrap {
  .carousel-control-prev,
  .carousel-control-next {
    opacity: 0;
  }

  &:hover {
    .carousel-control-prev,
    .carousel-control-next {
      opacity: 1;
    }
  }
}
</style>
