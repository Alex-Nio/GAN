import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Artifacts from "../views/Artifacts.vue";
import Registration from "../views/Auth/Registration.vue";
import Login from "../views/Auth/SignUp.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/artifacts",
        name: "artifacts",
        component: Artifacts
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

export default router;
