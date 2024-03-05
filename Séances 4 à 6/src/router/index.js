import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('/src/views/Home.vue')
    },

    {
      path: '/about',
      name: 'About',
      component: () => import('/src/views/About.vue')
    },

    {
      path: '/pays',
      name: 'Pays',
      component: () => import('/src/views/Pays.vue')
    },

    {
      path: '/fiche-pays/:id',
      name: 'FichePays',
      component: () => import('/src/views/FichePays.vue')
    },

    {
      path: '/recherche',
      name: 'Recherche',
      component: () => import('/src/views/Recherche.vue')
    }
  ]
})

export default router
