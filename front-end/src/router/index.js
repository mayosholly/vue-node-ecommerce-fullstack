import { createRouter, createWebHistory } from 'vue-router'
import Cartpage from '../views/CartPage.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
const routes = [
  {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: Cartpage,
  },
   {
    path: '/',
    redirect: '/products'
   },
   {
    path: '/mams',
    component: NotFoundPage,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
