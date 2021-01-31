
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import progress from 'nprogress'

progress.configure({ showSpinner: false });

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },
  // jika mengunakan param kita definisakn parameter di rute nyaa contoh nyaa sperti di Bawah, dan jika memakai queery string jangan membawa parameter di path nyaaa atau biarkan saja /detailtukang
  {
    path: '/detailtukang/:idkeahlian/:keahlian',
    name: 'tukang',
   
    component: () => import('../views/detailtukang.vue')
  },
  {
    path: '/transaksi/:idtukang',
    name: 'Transaksi',
    meta: {
      auth : true
    },
   
    component: () => import('../views/FormTransaksi.vue')
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,from,next) => {
  
  progress.start()
  progress.set(5.5)
  if (to.matched.some(record => record.meta.auth == true)) {
    
    if (store.getters.apakahuserlogin == true && store.getters.dataloginuser != "" ) {
        next()
    }else{
      next('/login')
    }
  }
  next() // kalau tidak ada next di akhir kitaa tidak bisa mengakses semua rutee
})

router.afterEach(() => {
  setTimeout(() => progress.done(), 70)
})



export default router
