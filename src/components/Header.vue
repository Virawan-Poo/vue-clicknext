<template>
  <header class="w-100 sticky-top">
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
              src="../assets/images/icon-list.svg"
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
            <div class="offcanvas-header justify-content-end">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <form class="d-flex d-flex d-lg-none mb-4" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn bg-secondary" type="submit">
                  <img src="../assets/images/icon-search.svg" alt="search" />
                </button>
              </form>

              <div class="row">
                <div class="col-12">
                  <dl>
                    <dt class="text-title mb-4">เมนู</dt>
                    <dd>
                      <a class="text-link" href="#">รู้จัก บลจ.ภัทร</a>
                    </dd>
                    <dd>
                      <a class="text-link" href="#">เกี่ยวกับเรา</a>
                    </dd>
                    <dd><a class="text-link" href="#">ติดต่อเรา</a></dd>
                    <dd>
                      <a class="text-link" href="#">คำถามที่พบบ่อย</a>
                    </dd>
                    <dd><a class="text-link" href="#">สมัครงาน</a></dd>
                    <dd><a class="text-link" href="#">Link</a></dd>
                  </dl>
                </div>
                <div class="col-12">
                  <dl>
                    <dt class="text-title mb-4">เมนู</dt>
                    <dd>
                      <a class="text-link" href="#">รู้จัก บลจ.ภัทร</a>
                    </dd>
                    <dd>
                      <a class="text-link" href="#">เกี่ยวกับเรา</a>
                    </dd>
                    <dd><a class="text-link" href="#">ติดต่อเรา</a></dd>
                    <dd>
                      <a class="text-link" href="#">คำถามที่พบบ่อย</a>
                    </dd>
                    <dd><a class="text-link" href="#">สมัครงาน</a></dd>
                    <dd><a class="text-link" href="#">Link</a></dd>
                  </dl>
                </div>
              </div>

              <dl class="d-flex d-lg-none mb-0 mt-4 align-self-start">
                <dd class="lang-menu active ps-0"><a href="#">TH</a></dd>
                <dd class="lang-menu"><a href="#">EN</a></dd>
              </dl>
            </div>
          </div>

          <div class="navbar-brand ps-2 ps-lg-4">
            <img src="../assets/images/logo-phatra.png" alt="logo phatra" />
          </div>
        </div>

        <div
          class="d-none d-lg-flex align-items-center justify-content-end w-50"
        >
          <form class="d-flex justify-content-end search-bar" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn-search" type="submit">
              <img src="../assets/images/icon-search.svg" alt="search" />
            </button>
          </form>

          <ul class="navbar-nav mb-0 ms-4">
            <li class="nav-item dropdown">
              <button
                class="btn-lang dropdown-toggle"
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

<script></script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

header {
  .navbar {
    background-color: #201f1a;
  }
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
  .lang-menu {
    margin: 0;
    position: relative;
    padding: 6px 30px;

    a {
      color: $grayPurple;
      text-decoration: none;
    }
    &.active {
      a {
        color: $violet;
      }
    }

    &::before {
      content: "";
      width: 1px;
      background-color: $whitePurple;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    &:first-child {
      &:before {
        display: none;
      }
    }
  }
  .navbar-brand {
    width: 150px;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .search-bar {
    .btn-search {
      width: 30px;
      height: 30px;
      padding: 4px;
      background-color: transparent;
      border: none;
      transition: padding 0.3s ease;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    input {
      padding: 0;
      border: none;
      width: 0;
      opacity: 0;
      transition: all 0.3s ease;
      box-sizing: border-box;

      &:focus {
        width: calc(100% - 30px);
        padding-left: 15px;
        opacity: 1;
        transition: all 0.3s ease;

        + .btn-search {
          padding: 0;
        }
      }
    }

    &:hover,
    &:focus {
      input {
        width: calc(100% - 30px);
        padding-left: 15px;
        opacity: 1;
        transition: all 0.3s ease;
      }

      .btn-search {
        padding: 0;
      }
    }
  }

  .btn-lang {
    background-color: transparent;
    color: #ffffff;
    border: none;
    font-family: Tahoma;
    font-size: 16px;
    font-weight: 500;
  }

  .text-title {
    font-family: "Kanit";
    font-size: 24px;
    font-weight: 500;
    line-height: 1em;
    color: $violet;
  }

  .text-link {
    font-family: "Kanit";
    font-size: 20px;
    font-weight: 500;
    line-height: 1em;
    color: $grayPurple;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: $lightPurple;
      padding-left: 20px;
      transition: all 0.3s ease;
    }
  }

  @media screen and (min-width: 992px) {
    position: fixed;
    z-index: 100;

    .navbar-brand {
      width: 206px;
    }
  }
}
</style>
