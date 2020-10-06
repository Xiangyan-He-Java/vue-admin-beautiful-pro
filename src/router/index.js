import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home-4-line",
      affix: true,
    },
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/index"),
        meta: {
          title: "首页",
          icon: "home-4-line",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/vab",
    component: Layout,
    redirect: "/vab/table",
    alwaysShow: true,
    meta: {
      title: "组件",
      icon: "apps-line",
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/vab/table"),
        meta: {
          title: "表格",
          icon: "table-2",
        },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    redirect: "/test/test",
    meta: {
      title: "动态路由测试",
      icon: "test-tube-line",
    },
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test"),
        meta: {
          title: "动态路由测试",
          icon: "test-tube-line",
        },
      },
    ],
  },
  {
    path: "/error",
    name: "Error",
    component: Layout,
    redirect: "/error/401",
    meta: {
      title: "错误页",
      icon: "error-warning-line",
    },
    children: [
      {
        path: "401",
        name: "Error401",
        component: () => import("@/views/401"),
        meta: {
          title: "401",
          icon: "error-warning-line",
        },
      },
      {
        path: "404",
        name: "Error404",
        component: () => import("@/views/404"),
        meta: {
          title: "404",
          icon: "error-warning-line",
        },
      },
    ],
  },
  {
    path: "/*",
    redirect: "/404",
    hidden: true,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
