import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginPage"),
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/admin/users",
    name: "adminUsers",
    component: () => import("../views/UserListPage.vue"),
  },
  {
    path: "/user/register",
    name: "userRegister",
    component: () => import("../views/UserRegisterPage.vue"),
  },
  {
    path: "/product/register",
    name: "productRegister",
    component: () => import("../views/ProductsRegisterPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
