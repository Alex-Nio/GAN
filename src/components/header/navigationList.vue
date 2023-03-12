<template>
  <ul class="navbar-list">
    <li v-for="link in menuLinks" :key="link.title" class="navbar-item" exact>
      <router-link
        v-if="
          (isLoggedIn && link.title == 'Главная') ||
          (isLoggedIn && link.title == 'Наборы') ||
          (isLoggedIn && link.title == 'Планирование')
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
  // imports
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  const router = useRouter();
  const isLoggedIn = ref(false);

  const menuLinks = [
    { title: "Главная", url: "/" },
    { title: "Наборы", url: "/kits" },
    { title: "Планирование", url: "/planning" },
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
    margin: 0 3px;
    opacity: 1;
    font-family: $ff_C;
    font-size: 1.8rem;
    font-weight: $sb;
    color: $black;
    border-radius: 5px;
    padding: 5px 10px;

    &:active {
      color: #e5f9e0;
      background-color: #40c9a2;
      transition: all 0.3s linear;
    }
  }

  .navbar-item {
    border-radius: 5px;
    transition: all 0.3s linear;

    &:hover {
      transform: translateY(-4px);
      background-color: $black;
      box-shadow: 0px 4px 7px -3px rgba(62, 67, 71, 0.11);
      transition: all 0.3s linear;
      & .navbar-link {
        color: $white;
        transition: all 0.3s linear;
      }
    }

    & .router-link-active {
      &.navbar-link {
        color: #e5f9e0;
        background-color: #40c9a2;
        box-shadow: 0px 4px 7px -2px rgba(62, 67, 71, 0.2);
      }
    }
  }

  .registration-items {
    &__item {
      color: $black;
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
