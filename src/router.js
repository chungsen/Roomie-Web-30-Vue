import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MoviesLevel2 from './views/movies_level_2'
import ServicesLevel1 from './views/services_level_1'
import Cart from './views/cart'
import ServicesLevel2 from './views/services_level_2'
import Dialog from './views/dialog'
import ToolsLanding from './views/tools-landing'
import Landing from './views/landing'
import FoodLevel2 from './views/food_level_2'
import ToolsChatWide from './views/tools-chat-wide'
import Restaurant from './views/restaurant'
import Promotions from './views/promotions'
import FoodLevel1 from './views/food_level_1'
import Page from './views/page'
import ToolsChatMobileList from './views/tools-chat-mobile-list'
import ToolsChatMobileMsg from './views/tools-chat-mobile-msg'
import InfoLevel1 from './views/info_level_1'
import Chat from './views/chat'
import ToolsChatMobileNewgroup from './views/tools-chat-mobile-newgroup'
import ToolsQrRegister from './views/tools-qr-register'
import MoviesLevel1 from './views/movies_level_1'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'movies_level_2',
      path: '/movies_level_2',
      component: MoviesLevel2,
    },
    {
      name: 'services_level_1',
      path: '/services_level_1',
      component: ServicesLevel1,
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart,
    },
    {
      name: 'services_level_2',
      path: '/services_level_2',
      component: ServicesLevel2,
    },
    {
      name: 'dialog',
      path: '/dialog',
      component: Dialog,
    },
    {
      name: 'tools-landing',
      path: '/tools-landing',
      component: ToolsLanding,
    },
    {
      name: 'landing',
      path: '/',
      component: Landing,
    },
    {
      name: 'food_level_2',
      path: '/food_level_2',
      component: FoodLevel2,
    },
    {
      name: 'tools-chat-wide',
      path: '/tools-chat-wide',
      component: ToolsChatWide,
    },
    {
      name: 'restaurant',
      path: '/restaurant',
      component: Restaurant,
    },
    {
      name: 'promotions',
      path: '/promotions',
      component: Promotions,
    },
    {
      name: 'food_level_1',
      path: '/food_level_1',
      component: FoodLevel1,
    },
    {
      name: 'Page',
      path: '/page',
      component: Page,
    },
    {
      name: 'tools-chat-mobile-list',
      path: '/tools-chat-mobile-list',
      component: ToolsChatMobileList,
    },
    {
      name: 'tools-chat-mobile-msg',
      path: '/tools-chat-mobile-msg',
      component: ToolsChatMobileMsg,
    },
    {
      name: 'info_level_1',
      path: '/info_level_1',
      component: InfoLevel1,
    },
    {
      name: 'chat',
      path: '/chat',
      component: Chat,
    },
    {
      name: 'tools-chat-mobile-newgroup',
      path: '/tools-chat-mobile-newgroup',
      component: ToolsChatMobileNewgroup,
    },
    {
      name: 'tools-qr-register',
      path: '/tools-qr-register',
      component: ToolsQrRegister,
    },
    {
      name: 'movies_level_1',
      path: '/movies_level_1',
      component: MoviesLevel1,
    },
  ],
})
