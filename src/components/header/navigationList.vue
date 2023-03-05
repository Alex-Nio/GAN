<template>
  <ul class="navbar-list">
    <li v-for="link in menuLinks" :key="link.title" class="navbar-item" exact>
      <router-link class="navbar-link" :to="`${link.url}`">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    menuLinks: {
      type: Array,
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";
  // .navbar-list {
  // }
  // .navbar-item {
  // }

  .navbar-link {
    font-size: 2.2rem;
    color: $white;
    font-weight: $b;
  }
  .router-link-active {
    color: rgb(231, 246, 27);
  }
</style>
