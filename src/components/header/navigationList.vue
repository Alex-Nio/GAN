<template>
  <ul class="navbar-list">
    <li v-for="link in menuLinks" :key="link.title" class="navbar-item" exact>
      <router-link
        v-if="
          (isLoggedIn && link.title == 'Главная') ||
          (isLoggedIn && link.title == 'Наборы')
        "
        class="navbar-link"
        :to="`${link.url}`"
      >
        {{ link.title }}
      </router-link>
      <a
        v-if="isLoggedIn && link.title == 'Выйти'"
        class="navbar-link"
        @click="handleSignOut"
      >
        Выйти
      </a>
    </li>
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

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/registration");
    });
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .navbar-link {
    @include fdrjc_aic;
    padding: 14px 40px 23px 32px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 1.4rem;
    opacity: 0.65;
    text-transform: uppercase;
    background-image: linear-gradient(-180deg, #777353 0%, #777353 100%);
    box-shadow: 0 1rem 1.25rem 0 #514f41, 0 -0.25rem 1.5rem #777353 inset,
      0 0.75rem 0.5rem #514f41c4 inset, 0 0.25rem 0.5rem 0 #514f41 inset;

    &:hover {
      opacity: 1;
    }
  }
  .router-link-active {
    &.navbar-link {
      opacity: 1;
    }
  }

  @media screen and (max-width: 667px) {
    .navbar-link {
      width: 100%;
      max-width: 120px;
      margin: 10px;
    }
  }
</style>
