import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomePage.vue"),
    },
    {
      path: "/cats",
      name: "categories",
      component: () => import("../components/Cats.vue")
    }
    
  ],
});

export default router;