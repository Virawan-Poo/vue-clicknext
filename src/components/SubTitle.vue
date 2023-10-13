<template>
  <div class="d-flex justify-content-between align-items-center py-4">
    <h2 class="title">{{ titleCategory }}</h2>
    <a :href="linkCategory" class="view-all"
      >ดูทั้งหมด <i class="icon-next ms-2"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: ["titleCategory", "linkCategory"],
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

.title {
  @include textTitle($violet);
}

.view-all {
  @include textSM($grayPurple);
  text-decoration: none;

  &:hover {
    color: $violet;
  }
}
</style>
