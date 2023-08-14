import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from "@/views/layout/Index.vue"
import Login from "@/views/login/Index.vue"
import Home from '@/views/home/Home.vue'
import Product from '@/views/product/Index.vue'
const List = () => import('@/views/product/list/Index.vue')
const Category = () => import('@/views/product/category/Index.vue')
import Order from '@/views/order/Index.vue'
const OrderList = () => import('@/views/order/list/Index.vue')
const OrderCategory = () => import('@/views/order/category/Index.vue')
import Advert from '@/views/advert/Index.vue'
const AdvertList = () => import('@/views/advert/list/Index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: '/',
        component: Home
      },
      {
        path: '/product',
        name: 'product',
        component: Product,
        // redirect: '/list',
        children: [
          {
            path: 'list',
            name: 'list',
            component: List
          },
          {
            path: 'category',
            namee: 'category',
            component: Category
          }
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'order-list',
            name: 'order-list',
            component: OrderList
          },
          {
            path: 'order-category',
            namee: 'order-category',
            component: OrderCategory
          }
        ]
      },
      {
        path: '/advert',
        name: 'advert',
        component: Advert,
        children: [
          {
            path: 'advert-list',
            name: 'advert-list',
            component: AdvertList
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
