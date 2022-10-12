import { createWebHashHistory, createRouter } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "Welcome",
  },
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    path: "/techs",
    name: "Techs",
  },
  {
    path: "/contacts",
    name: "Contacts",
  },
  {
    path: "/resume",
    name: "Resume",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Welcome",
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHashHistory("/portfolio-vite/"),
  base: "/portfolio-vite/",
  routes,
});

export default router;
