<template>
  <div class="full-wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <main-logo></main-logo>
            <div class="navbar-actions">
              <button
                @click="showMenu = !showMenu"
                class="burger-btn"
                :class="{ active: showMenu }"
              ></button>
            </div>
            <div class="navbar-list__wrapper" :class="{ active: showMenu }">
              <mobile-logo></mobile-logo>
              <navigation-list
                @click="showMenu = !showMenu"
                :menuLinks="menuLinks"
              ></navigation-list>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="content-wrapper">
      <router-view />
    </div>
    <fullsize-background></fullsize-background>
  </div>
</template>

<script setup>
  import mobileLogo from "@/components/UI/Logo/mobileLogo.vue";
  import { defineAsyncComponent, ref } from "vue";
  import navigationList from "@/components/header/navigationList.vue";
  import mainLogo from "@/components/UI/Logo/mainLogo.vue";
  import { useStore } from "vuex";
  const fullsizeBackground = defineAsyncComponent(() =>
    import("@/components/UI/fullsizeBackground.vue")
  );

  const store = useStore();
  const showMenu = ref(false);

  const menuLinks = [
    { title: "Главная", url: "/" },
    { title: "Артефакты", url: "/artifacts" },
    { title: "Логин", url: "/login" },
    { title: "Регистрация", url: "/registration" },
  ];
</script>

<style lang="scss">
  @import "@/assets/scss/imports.scss";

  .navbar-content {
    position: relative;
    @include fdrjc_aic;
    padding: 20px 0;
    height: 75px;
  }

  .logo {
    display: flex;
    flex: 0 1 15%;
    justify-content: center;
  }

  .burger-btn {
    display: none;
  }

  .navbar-actions {
    display: none;
  }

  .navbar-list {
    @include fdr;
    &__wrapper {
      @include fdrjc_aic;
      flex: 0 1 85%;

      &.active {
        display: flex;
      }
    }
  }
  .navbar-item {
    margin: 0 20px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1366px) {
    .navbar-list__wrapper {
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 860px) {
    .navbar-list__wrapper {
      display: none;
      justify-content: center;
    }

    .navbar-actions {
      display: inline-flex;
      position: fixed;
      width: 82px;
      height: 82px;
      top: 50px;
      right: 20px;
      transform: translateY(-50%);
      z-index: 90;
    }

    .burger-btn {
      display: inline-flex;
      position: relative;
      width: 62px;
      height: 62px;
      opacity: 0.5;

      &::before {
        content: "";
        position: absolute;
        width: 82px;
        height: 82px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("@/assets/img/icons/burger-bg.svg") no-repeat center / contain;
      }

      &::after {
        content: "";
        position: absolute;
        width: 82px;
        height: 82px;
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
          width: 82px;
          height: 82px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: rotate(360deg);
          transition: all 2s linear;
        }
      }
    }

    .navbar-list__wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(36, 226, 229, 0.29);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 85;
      animation: fadeIn 0.3s linear;
    }

    .navbar-list {
      @include fdcjc_aic;
      text-align: center;
    }

    .navbar-item {
      margin: 10px 0;
    }
    .navbar-item .navbar-link {
      font-size: 4rem;
    }

    .navbar-list .navbar-link {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 476px) {
    .navbar-actions {
      top: 40px;
      width: 52px;
      height: 52px;
    }
    .burger-btn {
      width: 52px;
      height: 52px;

      &::before {
        width: 52px;
        height: 52px;
      }

      &::after {
        width: 52px;
        height: 52px;
      }

      &.active {
        &::after {
          width: 52px;
          height: 52px;
        }
      }
    }
  }
</style>
