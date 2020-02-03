import Vue from "vue";
import VueRouter from "vue-router";
import homeScreen from "../views/homeScreen/homeScreen.vue";
import hotelListScreen from "../views/hotelListScreen/hotelListScreen.vue";
import loginScreen from "../views/loginScreen/loginScreen.vue";
import registerScreen from "../views/registerScreen/registerScreen.vue";
import hotelInfoScreen from "../views/hotelInfoScreen/hotelInfoScreen.vue";
import bookingScreen from "../views/bookingScreen/bookingScreen.vue";
import bookingListScreen from "../views/bookingListScreen/bookingListScreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: homeScreen,
    children: [
      {
        path: "",
        component: hotelListScreen
      },
      {
        path: "info/:id",
        component: hotelInfoScreen
      },
      {
        path: "booking",
        component: bookingScreen
      },
      {
        path: "mybooking",
        component: bookingListScreen
      }
    ]
  },
  {
    path: "/login",
    name: "loginScreen",
    component: loginScreen
  },
  {
    path: "/register",
    name: "registerScreen",
    component: registerScreen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
