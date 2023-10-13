<template>
  <footer>
    <div class="container pt-5 pb-3">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div><img src="../assets/images/logo-phatra.png" /></div>
          <h4 class="text-brand mt-5 mb-3">บริษัท ทุนภัทร จำกัด (มหาชน)</h4>
          <p class="text-desc">
            ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 252/6
            <br />ถนนรัชดาภิเษก แขวงห้วยขวาง <br />กรุงเทพมหานคร 10310
          </p>
        </div>
        <div class="d-none d-lg-inline-block col-lg-2">
          <dl>
            <dt class="text-title mb-4">เมนู</dt>
            <dd><a class="text-link" href="#">รู้จัก บลจ.ภัทร</a></dd>
            <dd><a class="text-link" href="#">เกี่ยวกับเรา</a></dd>
            <dd><a class="text-link" href="#">ติดต่อเรา</a></dd>
            <dd><a class="text-link" href="#">คำถามที่พบบ่อย</a></dd>
            <dd><a class="text-link" href="#">สมัครงาน</a></dd>
            <dd><a class="text-link" href="#">Link</a></dd>
          </dl>
        </div>
        <div class="d-none d-lg-inline-block col-lg-2">
          <dl>
            <dt class="text-title mb-4">เมนู</dt>
            <dd><a class="text-link" href="#">รู้จัก บลจ.ภัทร</a></dd>
            <dd><a class="text-link" href="#">เกี่ยวกับเรา</a></dd>
            <dd><a class="text-link" href="#">ติดต่อเรา</a></dd>
            <dd><a class="text-link" href="#">คำถามที่พบบ่อย</a></dd>
            <dd><a class="text-link" href="#">สมัครงาน</a></dd>
            <dd><a class="text-link" href="#">Link</a></dd>
          </dl>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <dl class="mb-2">
            <dt class="text-title mb-4">ติดต่อเรา</dt>
            <dd class="mb-4">
              <a class="text-link" href="#"
                ><span class="me-4"
                  ><img
                    src="../assets/images/icon-tel.svg"
                    alt="icon tel" /></span
                >(66) 2305 9800</a
              >
            </dd>
            <dd class="mb-4">
              <a class="text-link" href="#"
                ><span class="me-4"
                  ><img
                    src="../assets/images/icon-fax.svg"
                    alt="icon fax" /></span
                >(66) 2305 9803</a
              >
            </dd>
            <dd class="mb-4">
              <a class="text-link" href="#"
                ><span class="me-4"
                  ><img
                    src="../assets/images/icon-mail.svg"
                    alt="icon mail" /></span
                >customerservice@phatraasset.com</a
              >
            </dd>
            <dd class="pt-2 pt-lg-4 mb-0">
              <a class="logo-link" href="#"
                ><img
                  src="../assets/images/logo-facebook.svg"
                  alt="logo facebook"
              /></a>
              <a class="logo-link" href="#"
                ><img
                  src="../assets/images/logo-twitter.svg"
                  alt="logo twitter"
              /></a>
              <a class="logo-link" href="#"
                ><img
                  src="../assets/images/logo-youtube.svg"
                  alt="logo youtube"
              /></a>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="copy-right">
      <div
        class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between py-4"
      >
        <dl class="d-flex mb-0 align-self-start">
          <dd class="link"><a href="#">แผนผังเว็บไซต์</a></dd>
          <dd class="link"><a href="#">ข้อตกลงและเงื่อนไข</a></dd>
          <dd class="link"><a href="#">นโยบายข้อมูลส่วนตัว</a></dd>
        </dl>
        <p class="mt-3 mt-lg-0 mb-0">
          @2019 Phatra A© สงวนลิขสิทธิ์ 2562 บริษัทหลักทรัพย์จัดการกองทุน ภัทร
          จำกัดsset All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

footer {
  background-image: linear-gradient(to bottom, #6f6eb2 3%, #352c64 106%);

  .text-brand {
    font-family: "Kanit";
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3em;
    color: $white;
  }

  .text-desc {
    @include textSM($white);
  }

  .text-title {
    font-family: "Kanit";
    font-size: 24px;
    font-weight: 500;
    line-height: 1em;
    color: $white;
  }

  .text-link {
    font-family: Tahoma;
    font-size: 16px;
    line-height: 1.5em;
    color: $white;
    text-decoration: none;

    &:hover {
      color: $whitePurple;
    }
  }

  .logo-link {
    width: 44px;
    height: 44px;
    display: inline-block;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .copy-right {
    font-family: Tahoma;
    font-size: 13px;
    line-height: 1.3em;
    color: $whitePurple;
    border-top: 1px solid rgba($color: $whitePurple, $alpha: 0.5);

    .link {
      margin: 0;
      position: relative;
      padding: 6px 10px;

      a {
        color: $whitePurple;
        text-decoration: none;

        &:hover {
          color: $white;
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
  }

  @media screen and (min-width: 992px) {
    .copy-right {
      .link {
        padding: 6px 25px;

        &::before {
          &:first-child {
            padding-left: 0;
          }
        }
      }

      p {
        width: 50%;
      }
    }
  }
}
</style>
