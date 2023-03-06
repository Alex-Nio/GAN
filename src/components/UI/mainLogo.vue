<template>
  <router-link to="/" class="logo">
    <img src="@/assets/img/main-logo.svg" alt="logo" />
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
  .logo {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 2.4rem;
    font-weight: bold;
    color: rgb(231, 246, 27);
    z-index: 30;

    & > img {
      width: 290px;
    }
  }

  @media screen and (max-width: 860px) {
    .logo {
      display: none;
    }
  }
</style>
