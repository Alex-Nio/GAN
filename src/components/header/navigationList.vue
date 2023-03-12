<template>
  <ul class="navbar-list">
    <li v-for="link in menuLinks" :key="link.title" class="navbar-item" exact>
      <router-link
        v-if="
          (isLoggedIn && link.title == 'Главная') ||
          (isLoggedIn && link.title == 'Наборы') ||
          (isLoggedIn && link.title == 'Мои коллекции')
        "
        class="navbar-link"
        :to="`${link.url}`"
      >
        {{ link.title }}
      </router-link>
    </li>
  </ul>
  <ul @click.stop class="registration-items">
    <li v-for="link in registrationItems" :key="link.url">
      <router-link
        v-if="!isLoggedIn && link.title !== 'Выйти'"
        class="registration-items__item"
        :to="`${link.url}`"
        >{{ link.title }}</router-link
      >
      <router-link
        v-if="isLoggedIn && link.title == 'Выйти'"
        class="registration-items__item"
        @click.stop="handleSignOut"
        :to="`${link.url}`"
        >{{ link.title }}</router-link
      >
    </li>
  </ul>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  const router = useRouter(); // router
  const isLoggedIn = ref(false);

  const menuLinks = [
    { title: "Главная", url: "/" },
    { title: "Наборы", url: "/kits" },
    { title: "Мои коллекции", url: "/collections" },
  ];

  const registrationItems = [
    { title: "Логин", url: "/login" },
    { title: "Регистрация", url: "/registration" },
    { title: "Выйти", url: "/registration" },
  ];

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
    opacity: 1;
    text-transform: uppercase;
    color: $black;
    background-image: linear-gradient(-180deg, #b2b8b7 0%, #f3efef 100%);
    box-shadow: 0 1rem 1.25rem 0 #353433, 0 -0.25rem 1.5rem #434341 inset,
      0 0.75rem 0.5rem #b3b3ac inset, 0 0.25rem 0.5rem 0 #c9c9c4 inset;

    &:hover {
      transform: translateY(-4px);
    }
  }
  .router-link-active {
    &.navbar-link {
      color: $white;
      background-image: linear-gradient(-180deg, #777353 0%, #777353 100%);
      box-shadow: 0 1rem 1.25rem 0 #514f41, 0 -0.25rem 1.5rem #777353 inset,
        0 0.75rem 0.5rem #514f41 inset, 0 0.25rem 0.5rem 0 #514f41 inset;
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
