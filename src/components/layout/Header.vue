<template>
  <header id="header" class="header">
    <div class="header__top" :class="{ scrolling: scrollPosition > 0 }">
      <div class="header__container container">
        <a href="/"
          ><img class="header__logo" src="../../assets/Logo.svg" alt="logo"
        /></a>
        <ul class="header-nav" id="nav" ref="nav">
          <li
            class="header-nav__item"
            v-for="route in routes"
            :key="route.name"
          >
            <a
              href="#"
              class="header-nav__item-link"
              active-class="_active"
              v-scroll-to="{
                el: route.path,
                duration: 500,
                easing: 'linear',
                force: true,
                x: false,
                y: true,
              }"
              >{{ route.name }}</a
            >
          </li>
        </ul>
        <Slide class="header-nav__mobile" right>
          <ul class="header-nav" id="nav" ref="nav">
            <li
              class="header-nav__item"
              v-for="route in routes"
              :key="route.name"
            >
              <a
                href="#"
                class="header-nav__item-link"
                active-class="_active"
                v-scroll-to="{
                  el: route.path,
                  duration: 500,
                  easing: 'linear',
                  force: true,
                  x: false,
                  y: true,
                }"
                >{{ route.name }}</a
              >
            </li>
          </ul>
        </Slide>
      </div>
    </div>
    <div class="header__text">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__description">{{ description }}</p>
      <p class="header__description">{{ description_1 }}</p>
    </div>
  </header>
</template>
<script>
import { Slide } from 'vue-burger-menu';
export default {
  name: "Header",
  components: {
    Slide
  },
  data() {
    return {
      scrollPosition: 0,
      title: "CreativE DIGITAL Project",
      description: "Duis mollis, est non commodo luctus,",
      description_1:
        "nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
      routes: [
        {
          name: "Home",
          path: "#header",
        },
        {
          name: "About",
          path: "#about",
        },
        {
          name: "services",
          path: "#services",
        },
        {
          name: "works",
          path: "#works",
        },
        {
          name: "our-team",
          path: "#our-team",
        },
        {
          name: "contact",
          path: "#contact",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleTopBar);
  },
  methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style lang="scss">
.header {
  background-image: linear-gradient(rgba(#9f9acf, 0.6), rgba(#9f9acf, 0.6)),
    url(../../assets/bg_header.png);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 1070px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  background-size: cover;
  background-position: center;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &-nav {
    display: flex;
    font-size: 24px;
    color: #ffffff;
    font-family: "ProximaNova", sans-serif;
    text-transform: uppercase;
    margin: 0;
    align-items: center;
    @include media-max-width($screen-tablet) {
      display: none;
    }
    @include media-max-width($screen-netbook) {
      font-size: 15px;
    }
  }
  &-nav__mobile {
    display: none;
    @include media-max-width($screen-tablet) {
      display: flex;
    }
  }
  &-nav__item {
    margin-right: 28px;
  }
  &-nav__item:hover {
    a {
      color: #dbdbdb;
    }
  }
  &-nav__item:last-child {
    margin-right: 0;
  }
  &__top {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 58px;
    transition: 0.3s ease-in;
  }
  .scrolling {
    background: rgba(94, 85, 175, 0.5);
    z-index: 2;
    padding: 20px 0;
    transition: 0.3s ease-in;
    top: 0;
    .header__container {
      padding-top: 0;
      display: flex;
      align-items: center;
    }
  }
  &__title {
    font-size: 72px;
    text-transform: uppercase;
    color: #fefefb;
    font-family: "ProximaNova", sans-serif;
    font-weight: bold;
  }
  &__description {
    font-size: 30px;
    color: #fefdfd;
    font-family: "PT Sans", sans-serif;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@include media-max-width($screen-netbook) {
  .header {
    min-height: auto;
    padding: 200px 36px 100px;
    &__container {
      padding: 0 30px;
      position: relative;
    }
    &__title {
      font-size: 30px;
      text-align: center;
    }
    &__description {
      font-size: 20px;
      text-align: center;
    }
    &-nav__item {
      margin-right: 10px;
    }
    .scrolling {
      padding: 0;
      .bm-burger-button {
        cursor: pointer;
      }
    }
  }
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 0;
    top: 25%;
    right: 30px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background: #fefefb;
    display: flex;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #ebeaf3;
    height: 25px !important;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
    left: 50px;
  }
  .bm-menu {
    height: fit-content; 
    position: fixed; 
    z-index: 1000; 
    top: 0;
    left: 0;
    background: rgba(146, 139, 197, 0.8);
    overflow-x: hidden; 
    transition: 0.5s;
  }

  .bm-item-list {
    color: #b8b7ad;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    flex-direction: column;
  }
  .bm-item-list > * > span {
    font-weight: 700;
    color: #fefdfd;
  }
}
@include media-max-width($screen-tablet) {
  .header {
    min-height: auto;
    padding: 150px 10px 100px;
    &__logo {
      width: 70%;
    }
    &__container {
      padding: 0 10px;
    }
    &__title {
      font-size: 30px;
      text-align: center;
    }
    &__description {
      font-size: 20px;
      text-align: center;
    }
    .scrolling {
      .bm-burger-button {
      right: 10px;
    }
    }
    &-nav__item {
      font-size: 18px;
      padding-bottom: 10px;
    }
    .bm-menu {
      padding-top: 15px;
    }
  }
}

</style>
