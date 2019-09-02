import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import category from '@/pages/category.vue'
import mine from '@/pages/mine.vue'
import detail from '@/pages/detail.vue'
import login from '@/pages/else/login.vue'
import note from '@/pages/note.vue'
import newNote from '@/pages/newNote.vue'
// import first from '@/pages/first.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/newNote',
      name: 'newNote',
      component: newNote
    }
    // {
    //   path: '/first',
    //   name: 'first',
    //   component: first
    // }
  ]
})
