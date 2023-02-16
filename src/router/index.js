import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import ClientUserView from "../views/ClientUserView.vue";
import SiteView from "../views/SiteView.vue";
import PointView from "../views/PointView.vue";
import GatewayView from "../views/GatewayView.vue";
import DeviceView from "../views/DeviceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/client-user",
    name: "client user",
    component: ClientUserView,
  },
  {
    path: "/site",
    name: "site",
    component: SiteView,
  },
  {
    path: "/point",
    name: "point",
    component: PointView,
  },
  {
    path: "/gateway",
    name: "gateway",
    component: GatewayView,
  },
  {
    path: "/device",
    name: "device",
    component: DeviceView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
