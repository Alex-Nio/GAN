<template>
  <div class="full-wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <main-logo></main-logo>
            <button @click="showMenu = !showMenu" class="burger-btn">Burger</button>
            <div class="navbar-list__wrapper" :class="{ active: showMenu }">
              <navigation-list :menuLinks="menuLinks"></navigation-list>
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
  import { defineAsyncComponent, ref } from "vue";
  import navigationList from "@/components/header/navigationList.vue";
  import mainLogo from "@/components/UI/mainLogo.vue";
  const fullsizeBackground = defineAsyncComponent(() =>
    import("@/components/UI/fullsizeBackground.vue")
  );

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
  }

  .logo {
    display: flex;
    flex: 0 1 15%;
    justify-content: center;
  }

  .burger-btn {
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

  @media screen and (max-width: 991px) {
    .navbar-list__wrapper {
      display: none;
    }

    .burger-btn {
      display: inline-flex;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
</style>
