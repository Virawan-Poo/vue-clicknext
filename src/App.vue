<script setup>
import LayoutDefault from "./layouts/default.vue";
import Banner from "./components/Banner.vue";
import NavMenu from "./components/NavMenu.vue";
import HomeArticle from "./components/HomeArticle.vue";
import NewsSlide from "./components/NewsSlide.vue";
import SubTitle from "./components/SubTitle.vue";
import Channel from "./components/Channel.vue";
import { contentList } from "./data/contentList";
import { homebannerList } from "./data/homebannerList";
</script>

<template>
  <LayoutDefault>
    <Banner :jsonData="homeBanner" />

    <section class="gray-bg pb-5">
      <NavMenu />
      <div class="container">
        <div class="row pt-lg-5">
          <div class="col-12 col-lg-8">
            <SubTitle titleCategory="Article" linkCategory="#" />
            <HomeArticle :jsonData="articleData" show="3" />
          </div>

          <div class="col-12 col-lg-4">
            <SubTitle titleCategory="News" linkCategory="#" />
            <NewsSlide />
          </div>
        </div>
      </div>
    </section>
    <section>
      <Channel />
    </section>
  </LayoutDefault>
</template>

<script>
export default {
  data() {
    return {
      articleData: contentList,
      homeBanner: homebannerList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
