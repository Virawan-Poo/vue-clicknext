<template>
  <div class="container pb-3">
    <div
      class="head-section pt-5 pb-4 py-md-5 d-flex flex-wrap align-items-center flex-md-nowrap"
    >
      <span></span>
      <h2 class="title me-0 ms-2 ms-md-4 mb-0 me-md-4">KKP Channel</h2>
      <h3 class="sub-title mt-3 mb-0 mt-md-0">
        อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร
        พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์
      </h3>
    </div>

    <div class="channel-wrap mt-3 mt-xl-4">
      <ul class="nav nav-channel pb-4 ms-xl-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link ps-0 pe-lg-5 active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab-kkp-focus"
            type="button"
            role="tab"
            aria-controls="tab-kkp-focus"
            aria-selected="true"
          >
            KKP FOCUS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link px-lg-5"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab-optimise"
            type="button"
            role="tab"
            aria-controls="tab-optimise"
            aria-selected="false"
          >
            OPTIMISE
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link px-lg-5"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab-kkp-advisor"
            type="button"
            role="tab"
            aria-controls="tab-kkp-advisor"
            aria-selected="false"
          >
            KKP Advisor
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="tab-kkp-focus"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="row align-items-center ms-xl-4">
            <div class="channel-frame col-lg-7 ps-xl-0">
              <img src="../public/cover-video.jpg" />
            </div>
            <div class="col-lg-5">
              <div class="wrap-content col-xxl-7 py-4 py-xxl-5">
                <h2 class="highlight">KKP Focus</h2>
                <h3 class="content">
                  ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสำเร็จจริง
                  ที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไป ได้ก้าวไปถึงฝัน
                </h3>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end py-4">
            <a href="http//" class="view-all"
              >ดูทั้งหมด <i class="icon-next ms-2"></i
            ></a>
          </div>
          <div class="slide-wrap">
            <swiper
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :breakpoints="{
                '640': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '992': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }"
            >
              <swiper-slide v-for="data in kkpFocusList" :key="data.id">
                <div class="card">
                  <a class="article-img" href="#">
                    <figure class="mb-0">
                      <img :src="data.image" class="card-img-top" alt="" />
                    </figure>
                  </a>
                  <div class="card-body p-0 py-4">
                    <a class="card-content">
                      <h5 class="card-title mb-4">{{ data.title }}</h5>
                    </a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tab-optimise"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="row align-items-center ms-xl-4">
            <div class="channel-frame col-lg-7 ps-xl-0">
              <img src="../public/cover-video.jpg" />
            </div>
            <div class="col-lg-5">
              <div class="wrap-content col-xxl-7 py-4 py-xxl-5">
                <h2 class="highlight">OPTIMISE</h2>
                <h3 class="content">
                  ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสำเร็จจริง
                  ที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไป ได้ก้าวไปถึงฝัน
                </h3>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end py-4">
            <a href="http//" class="view-all"
              >ดูทั้งหมด <i class="icon-next ms-2"></i
            ></a>
          </div>
          <div class="slide-wrap">
            <swiper
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :breakpoints="{
                '640': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '992': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }"
            >
              <swiper-slide v-for="data in optimiseList" :key="data.id">
                <div class="card">
                  <a class="article-img" href="#">
                    <figure class="mb-0">
                      <img :src="data.image" class="card-img-top" alt="" />
                    </figure>
                  </a>
                  <div class="card-body p-0 py-4">
                    <a class="card-content">
                      <h5 class="card-title mb-4">{{ data.title }}</h5>
                    </a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tab-kkp-advisor"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div class="row align-items-center ms-xl-4">
            <div class="channel-frame col-lg-7 ps-xl-0">
              <img src="../public/cover-video.jpg" />
            </div>
            <div class="col-lg-5">
              <div class="wrap-content col-xxl-7 py-4 py-xxl-5">
                <h2 class="highlight">KKP Advisor</h2>
                <h3 class="content">
                  ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสำเร็จจริง
                  ที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไป ได้ก้าวไปถึงฝัน
                </h3>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end py-4">
            <a href="http//" class="view-all"
              >ดูทั้งหมด <i class="icon-next ms-2"></i
            ></a>
          </div>
          <div class="slide-wrap">
            <swiper
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :breakpoints="{
                '640': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '992': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }"
            >
              <swiper-slide v-for="data in kkpAdvisorList" :key="data.id">
                <div class="card">
                  <a class="article-img" href="#">
                    <figure class="mb-0">
                      <img :src="data.image" class="card-img-top" alt="" />
                    </figure>
                  </a>
                  <div class="card-body p-0 py-4">
                    <a class="card-content">
                      <h5 class="card-title mb-4">{{ data.title }}</h5>
                    </a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { channelList } from "../data/channelList";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const kkpFocusList = ref(channelList.kkpFocus);
    const optimiseList = ref(channelList.optimise);
    const kkpAdvisorList = ref(channelList.kkpAdvisor);

    return {
      modules: [Pagination],
      kkpFocusList,
      optimiseList,
      kkpAdvisorList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";
.head-section {
  span {
    width: 3rem;
    height: 3px;
    display: inline-block;
    background-image: linear-gradient(to right, #e9eaef -18%, #b9b9c3 122%);
  }
}
.title {
  @include textTitle($violet);
  margin-right: 33px;
  min-width: 200px;
}

.sub-title {
  @include textSubTitleSM($grayPurple);
  width: 100%;
}

.nav-channel {
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

.nav-item {
  position: relative;

  &::after {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #adacb9;
    display: inline-block;
    position: absolute;
  }

  .nav-link {
    @include textSubTitle($grayPurple);
    display: inline-block;
    padding: 0 20px;

    &.active,
    &:hover {
      color: $violet;
    }
  }
}

.wrap-content {
  position: relative;
  .highlight {
    font-family: "Kanit", sans-serif;
    font-size: 42px;
    font-weight: 500;
    line-height: 1.25em;
    color: $violet;
  }

  .content {
    font-family: "Kanit", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4em;
    color: $grayPurple;
    margin: 20px 0;
  }

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      #d0cfd8 -3%,
      #e9eaef 55%,
      #b9b9c3 111%
    );
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

.channel-frame {
  img {
    width: 100%;
  }
}

.card {
  display: block;
  background-color: unset;
  border-radius: 0;
  border: none;
  margin-bottom: 20px;
}
.card-content {
  cursor: pointer;
  display: block;
  text-decoration: none;
  .card-title {
    @include textSubTitle($violet);
    margin-bottom: 20px;
    transition: color 0.3s ease;
  }

  &:hover {
    .card-title {
      color: $lightPurple;
    }
  }

  .card-text {
    display: none;
    @include textSM($grayPurple);
  }
}

.view-all {
  @include textSM($grayPurple);
  text-decoration: none;
}
@media screen and (min-width: 576px) {
  .nav-channel {
    white-space: wrap;
    flex-wrap: wrap;
    overflow-x: unset;
  }
}
@media screen and (min-width: 1200px) {
  .wrap-content {
    margin-left: 50px;
    .content {
      margin: 40px 0 20px;
    }
  }
}
</style>
