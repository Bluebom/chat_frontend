import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/ViewLogin.vue";
import Dashboard from "@/views/ViewDashboard.vue";
import Register from "@/views/ViewRegister.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import ViewChat from "@/views/ViewChat.vue";
import store from "@/store";
import AuthLayout from "@/components/AuthLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "Dashboard",
    meta: {
      requiresAuth: true,
    },
    component: DefaultLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/chat",
        name: "Chat",
        component: ViewChat,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "Login",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (
    store.state.user.token &&
    (to.name === "Login" || to.name === "Register")
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
