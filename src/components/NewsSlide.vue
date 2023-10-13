<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/images/img-news.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/img-news.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/img-news.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>

      <div class="carousel-indicators mt-3">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-indicators {
  position: relative;
  align-items: center;

  button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: solid 1px #adadb9;
    background-color: transparent;
    opacity: 1;
    box-sizing: border-box;
    margin: 0 5px;
    transition: all 0.3s ease;

    &.active {
      width: 11px;
      height: 11px;
      background-color: #626099;
      transition: all 0.3s ease;
    }
  }
}
</style>
