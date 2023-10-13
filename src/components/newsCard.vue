<template>
  <div class="news-card" v-for="data in jsonData.slice(0, show)" :key="data.id">
    <a class="article-img" href="#">
      <figure class="mb-0">
        <img
          :src="'../src/public/article/img-article-' + data.id + '.jpg'"
          class="card-img-top"
          alt=""
        />
      </figure>
    </a>
    <div class="card-body">
      <a class="card-content">
        <h5 class="card-title mb-3">
          {{ data.title }}
        </h5>
        <p class="card-text mb-3">
          {{ data.desc }}
        </p>
      </a>
      <div>
        <a href="#" class="card-category my-2 pe-3 py-1"
          ><span class="ms-3 z-1 position-relative">{{
            data.category
          }}</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jsonData", "show"],
};
</script>

<style lang="scss"></style>
