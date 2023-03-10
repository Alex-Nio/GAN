import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "../store";
import HomeView from "../views/Home.vue";
import Kits from "../views/Kits.vue";
import Notes from "../views/Notes.vue";
import Registration from "../views/Auth/Registration.vue";
import Login from "../views/Auth/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/kits",
    name: "kits",
    component: Kits,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/notes/:title",
    name: "notes",
    component: Notes,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = getAuth().onAuthStateChanged(user => {
      store
        .dispatch("setUserAndNotes")
        .then(() => {
          unsubscribe();
          resolve(user);
        })
        .catch(error => {
          unsubscribe();
          reject(error);
        });
    });
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      // console.log("Пользователь не зарегистрирован");
      next("/registration");
    }
  } else {
    next();
  }
});

export default router;
