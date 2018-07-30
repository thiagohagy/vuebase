import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'

import Game from '@/components/game/Game'
import GameHome from '@/components/game/GameHome'
import GameNew from '@/components/game/GameNew'
import GameEdit from '@/components/game/GameEdit'

import Users from '@/components/users/Users';
import UsersHome from '@/components/users/UsersHome';
import UsersNew from '@/components/users/UsersNew';
import UsersEdit from '@/components/users/UsersEdit';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        humanName: 'Dashboard',
        showOnNav: true,
      }
    },
    // Games
    {
      path: '/game',
      redirect: '/game/home',
      name: 'Game',
      component: Game,
      meta: {
        humanName: 'Games',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          name: 'GameHome',
          component: GameHome,
          meta: {
            humanName: 'List'
          },
        },
        {
          path: 'new',
          name: 'GameNew',
          component: GameNew,
          meta: {
            humanName: 'New'
          },
        },
        {
          path: 'edit/:id',
          name: 'GameEdit',
          component: GameEdit,
          meta: {
            humanName: 'Edit'
          },
        }
      ],
    },
    // USERS
    {
      path: '/users',
      redirect: '/users/home',
      name: 'Users',
      component: Users,
      meta: {
        humanName: 'Users',
        showOnNav: true
      },
      children: [
        {
          path: 'home',
          name: 'UsersHome',
          component: UsersHome,
          meta: {
            humanName: 'List'
          },
        },
        {
          path: 'new',
          name: 'UsersNew',
          component: UsersNew,
          meta: {
            humanName: 'New'
          },
        },
        {
          path: 'edit/:id',
          name: 'UsersEdit',
          component: UsersEdit,
          meta: {
            humanName: 'Edit'
          },
        }
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
  ]
})
