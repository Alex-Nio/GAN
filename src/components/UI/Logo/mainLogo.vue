<template>
  <router-link to="/" class="logo">
    <img src="" alt="logo" />
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
  .logo {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 30;

    & > img {
      width: 92px;
    }
  }

  @media screen and (max-width: 860px) {
    .logo {
      display: none;
    }
  }
</style>
