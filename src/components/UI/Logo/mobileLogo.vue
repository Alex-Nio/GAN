<template>
  <router-link to="/" class="mobile-logo">
    <img src="@/assets/img/main-logo.svg" alt="logo" />
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
  .mobile-logo {
    display: none;
  }

  @media screen and (max-width: 976px) {
    .mobile-logo {
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.4rem;
      font-weight: bold;
      z-index: 30;

      & > img {
        width: 120px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .mobile-logo {
      left: 20px;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 220px) {
    .mobile-logo {
      display: none;
    }
  }
</style>
