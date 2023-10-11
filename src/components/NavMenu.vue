<script setup>
import { ref } from "vue";
import { listMenu } from "../data/listMenu";
const list = ref(listMenu);
</script>

<template>
  <div class="px-5 position-relative">
    <swiper
      class="wrapMenu"
      :navigation="true"
      :modules="modules"
      :slides-per-view="4"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="menu in list" :key="menu.id"
        ><a
          class="buttonMenu"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          >{{ menu.menuName }}</a
        ></swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapMenu {
  position: unset;
  .buttonMenu {
    font-family: Kanit;
    font-size: 20px;
    font-weight: 500;
    line-height: 1em;
    color: #594f74;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 86px;
    transition: all 0.3s ease;
    background-image: linear-gradient(
      to right,
      #eeedf2 3%,
      #ebeaef 34%,
      #e5e5e8 94%
    );

    &:before {
      content: "";
      height: 7px;
      background-image: linear-gradient(to right, #8c8bc2 4%, #64599e);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &:hover,
    &.active {
      background-image: linear-gradient(to left, #655a9f, #8b8bc1);
      color: #ffffff;

      &::before {
        opacity: 0;
      }
    }
  }
}
</style>
