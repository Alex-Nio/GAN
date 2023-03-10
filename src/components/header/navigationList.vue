<template>
  <ul class="navbar-list">
    <li v-for="link in menuLinks" :key="link.title" class="navbar-item" exact>
      <router-link
        v-if="
          (!isLoggedIn && link.title == 'Регистрация') ||
          (!isLoggedIn && link.title == 'Логин')
        "
        class="navbar-link"
        :to="`${link.url}`"
        >{{ link.title }}</router-link
      >
      <router-link
        v-if="
          (isLoggedIn && link.title == 'Главная') ||
          (isLoggedIn && link.title == 'Артефакты') ||
          (isLoggedIn && link.title == 'Выйти')
        "
        class="navbar-link"
        :to="`${link.url}`"
        >{{ link.title }}</router-link
      >
    </li>
    <button class="navbar-link" v-if="isLoggedIn" @click="handleSignOut">Выйти</button>
  </ul>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  const router = useRouter(); // router
  const isLoggedIn = ref(false);

  const props = defineProps({
    menuLinks: {
      type: Array,
      default: [],
    },
  });

  let auth;

  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/registration");
    });
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .navbar-link {
    font-size: 2.2rem;
    color: $white;
    font-weight: $b;
  }
  .router-link-active {
    color: rgb(231, 246, 27);
  }
</style>
