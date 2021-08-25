import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//避免到当前位置的冗余导航
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "liquidity"
    },
    //Liquidity
    {
      path: "/liquidity",
      name: "liquidity",
      component: () => import("../views/liquidity.vue")
    },
    //Swap PT
    {
      path: "/swapPt",
      name: "swapPt",
      component: () => import("../views/swapPt.vue")
    },
    //My Positions
    {
      path: "/myPositions",
      name: "myPositions",
      component: () => import("../views/myPositions.vue")
    },
  ]
});
