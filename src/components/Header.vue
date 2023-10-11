<template>
  <header class="w-100 fixed-top">
    <nav class="navbar bg-body-transparent">
      <div class="container">
        <div class="d-flex align-items-center">
          <button
            class="hamburger-menu btn p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <img
              src="../public/icon-list.svg"
              alt="hamburger menu"
              width="44px"
              height="31px"
            />
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Backdrop with scrolling
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>

          <div class="navbar-brand ps-4">
            <img src="../public/logo-phatra.png" alt="logo phatra" />
          </div>
        </div>

        <div class="d-flex align-items-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="../public/icon-search.svg" alt="search" />
          </button>

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TH
              </button>
              <ul class="dropdown-menu dropdown-menu-dark position-absolute">
                <li><a class="dropdown-item" href="#">EN</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  width: 48px;
  height: 50px;
  display: block;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
