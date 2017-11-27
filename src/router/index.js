import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import MyFirstVue from '@/components/MyFirstVue'
import Header from '@/views/Header'
import TodoList from '@/views/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/my-vue',
      name: 'MyFirstVue',
      component: MyFirstVue
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/todo-list',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
