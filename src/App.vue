<template>
  <div class="full-wrapper">
    <header class="on-scroll">
      <div class="navbar">
        <div class="navbar-content">
          <main-logo></main-logo>
          <div v-if="isLoggedIn" class="navbar-actions">
            <button
              @click="toggleMenu"
              class="burger-btn"
              :class="{ active: showMenu }"
            ></button>
          </div>
          <div
            @click="toggleMenu"
            class="navbar-list__wrapper"
            :class="{ active: showMenu }"
          >
            <mobile-logo></mobile-logo>
            <navigation-list></navigation-list>
          </div>
        </div>
      </div>
    </header>
    <div class="content-wrapper">
      <router-view />
    </div>
    <fullsize-background></fullsize-background>
  </div>
  <main-footer></main-footer>
</template>

<script setup>
  import { defineAsyncComponent, ref, onMounted, onUnmounted } from "vue";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import navigationList from "@/components/header/navigationList.vue";
  import mainLogo from "@/components/UI/Logo/mainLogo.vue";
  import mobileLogo from "@/components/UI/Logo/mobileLogo.vue";
  import mainFooter from "@/components/footer/mainFooter.vue";
  const fullsizeBackground = defineAsyncComponent(() =>
    import("@/components/UI/fullsizeBackground.vue")
  );

  const showMenu = ref(false);
  const isLoggedIn = ref(false);
  let auth = getAuth();

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  const toggleMenu = () => {
    if (window.innerWidth <= 976) {
      showMenu.value = !showMenu.value;
      document.body.classList.toggle("no-scroll", showMenu.value);
    }
  };
</script>

<style lang="scss">
  @import "@/assets/scss/imports.scss";

  .content-wrapper {
    margin-top: 54px;
  }

  header {
    &.on-scroll {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
    }
  }

  .navbar {
    margin-bottom: 10px;
  }

  .navbar-content {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    height: 54px;
    z-index: 55;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    background: rgb(60, 76, 74);
    background: linear-gradient(
      180deg,
      rgba(60, 76, 74, 1) 0%,
      rgba(52, 65, 62, 0.8) 35%,
      rgba(45, 54, 52, 1) 100%
    );

    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: 5px;
      width: 20vw;
      border-bottom: 4px solid #777353;
    }
    &:before {
      left: 100px;
    }

    &:after {
      right: 100px;
    }
  }
  .navbar-actions {
    display: none;
  }
  .burger-btn {
    display: none;
  }
  .navbar-list {
    @include fdrjc_aic;
    padding: 15px 40px 0 40px;
    background: rgb(60, 76, 74);
    background: linear-gradient(
      180deg,
      rgb(30, 146, 131) 0%,
      rgba(79, 167, 147, 0.8) 35%,
      rgb(53, 100, 89) 100%
    );
    box-shadow: 0 0.25rem 0.5rem 0 #514f411c;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    height: 54px;

    &__wrapper {
      margin-bottom: 20px;
    }
  }
  .registration-items {
    @include fdrjc_aic;
    position: absolute;
    top: 50%;
    right: 120px;
    transform: translateY(-50%);

    & li {
      &:first-child {
        margin-right: 15px;
      }
    }

    &__item {
    }
  }

  @media screen and (max-width: 1060px) {
    .navbar-content {
      &:before,
      &:after {
        display: none;
      }
    }
  }

  @media screen and (max-width: 976px) {
    .navbar-content {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .navbar-list {
      display: none;
    }

    .navbar-list__wrapper {
      margin-bottom: 0;

      &.active {
        width: 100%;
        padding: 70px 20px;
        background: rgb(60, 76, 74);
        animation: fadeIn 0.3s linear;

        & .navbar-list {
          display: flex;
          flex-wrap: wrap;
          background: transparent;
          padding: 10px 0;
        }
      }
    }

    .registration-items {
      right: unset;
      left: 60px;
    }

    .navbar-actions {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      height: 54px;
    }

    .burger-btn {
      display: inline-flex;
      position: fixed;
      top: 3px;
      right: 20px;
      width: 48px;
      height: 48px;
      opacity: 0.5;
      z-index: 30;

      &::before {
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("@/assets/img/icons/burger-bg.svg") no-repeat center / contain;
      }

      &::after {
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("@/assets/img/icons/burger-main.svg") no-repeat center / contain;
      }

      &.active {
        opacity: 1;
        &::after {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: rotate(360deg);
          transition: all 2s linear;
        }
      }
    }
  }

  @media screen and (max-width: 667px) {
    .registration-items {
      display: none;
    }

    .navbar-list__wrapper {
      margin-bottom: 0;

      &.active {
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100%;
        & .registration-items {
          display: flex;
          flex-direction: column;
          position: relative;
          left: unset;

          & li {
            &:first-child {
              margin-right: 0;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
</style>
