<template>
  <router-link to="/" class="logo">
    <img src="@/assets/img/main-logo.svg" alt="logo" />
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
  .logo {
    position: absolute;
    top: 10px;
    left: 120px;
    font-size: 2.4rem;
    font-weight: bold;
    color: rgb(231, 246, 27);

    & > img {
      width: 166px;
    }
  }
</style>
