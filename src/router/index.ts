import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/main",
    component: () => import("../components/main/DatabaseList.vue"),
    name: "DatabaseList",
  },
  {
    path: "/main/database",
    component: () => import("../components/database/Database.vue"),
    name: "Database",
    children: [
      {
        path: "backups/",
        component: () =>
          import("../components/database/pane/backups/Backups.vue"),
        name: "Backups",
      },
      {
        path: "config/",
        component: () =>
          import("../components/database/pane/config/Config.vue"),
        name: "Config",
      },
      {
        path: "alert_list/",
        component: () =>
          import("../components/database/pane/alert/AlertList.vue"),
        name: "AlertList",
        children: [
          {
            path: ":alert",
            component: () =>
              import("../components/database/pane/alert/Alert.vue"),
            name: "Alert",
          },
        ],
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../components/main/DatabaseList.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
