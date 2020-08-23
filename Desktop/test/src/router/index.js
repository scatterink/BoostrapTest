// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files

import VueRouter from  "vue-router"
import Vue from "vue"
import Main from "../components/Main.vue"
import Test  from "../components/Test.vue"


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/test', component: Test }
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
export default router

// Now the app has started!