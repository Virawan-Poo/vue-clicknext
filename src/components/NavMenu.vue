<template>
  <div class="position-relative overflow-hidden nav-menu">
    <swiper
      class="wrapMenu"
      :modules="modules"
      :slidesPerView="'auto'"
      :space-between="10"
      :breakpoints="{
        '768': {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        '992': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide v-for="menu in list" :key="menu.id"
        ><a
          class="buttonMenu"
          :class="{ active: menu.id === 1 }"
          :href="menu.link"
          target="_blank"
          rel="noopener noreferrer"
          >{{ menu.menuName }}</a
        ></swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { listMenu } from "../data/listMenu";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const list = ref(listMenu);

    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";
.nav-menu {
  margin: -10px auto 0;
}
.wrapMenu {
  overflow: visible;
  position: unset;
  padding: 0 20px;

  .swiper-slide {
    width: 200px;
  }
  .buttonMenu {
    font-family: "Kanit";
    font-size: 20px;
    font-weight: 500;
    line-height: 1em;
    color: $violet;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 60px;
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

@media screen and (min-width: 576px) {
  .nav-menu {
    margin-top: -30px;
  }
  .wrapMenu {
    overflow: hidden;

    .buttonMenu {
      padding: 20px;
      height: 86px;
    }
  }
}

@media screen and (min-width: 992px) {
  .nav-menu {
    max-width: 960px;
  }
}

@media screen and (min-width: 1200px) {
  .nav-menu {
    max-width: 1200px;
  }
}
</style>
