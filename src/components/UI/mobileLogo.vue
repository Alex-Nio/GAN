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

  @media screen and (max-width: 861px) {
    .mobile-logo {
      display: inline-block;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.4rem;
      font-weight: bold;
      color: rgb(231, 246, 27);
      z-index: 30;

      & > img {
        width: 300px;
      }
    }
  }
</style>
