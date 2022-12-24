import { createRouter, createWebHistory } from "vue-router";
import CompareViewVue from "@/views/pages/CompareView/CompareView.vue";
import LandingPageVue from "@/views/LandingPage.vue";
import DetailPackViewVue from "@/views/pages/DetailPackView/DetailPackView.vue";
import HomeView from "@/views/pages/Home/HomeView.vue";
import IndexView from "@/views/pages/Home/index.vue";
import MapsView from "@/views/pages/Home/MapsView.vue";
import LoginPage from "@/views/LoginPage.vue";
import LoginView from "@/views/pages/LoginView/Index.vue";
import RegisterView from "@/views/pages/RegisterView/Index.vue";
import InputEmailVue from "@/views/pages/ForgotPassView/InputEmail.vue";
import ConfirmEmailVue from "@/views/pages/ForgotPassView/ConfirmEmail.vue";
import MemberArea from "@/views/pages/MemberAreaView/Index.vue";
import MemberProfile from "@/views/pages/MemberAreaView/MemberProfile.vue";
import Messages from "@/views/pages/MemberAreaView/Messages.vue";
import Notification from "@/views/pages/MemberAreaView/Notification.vue";
import Favorite from "@/views/pages/MemberAreaView/Favorite.vue";
import Orders from "@/views/pages/MemberAreaView/Orders.vue";
import CheckOutView from "@/views/pages/CheckoutView/index.vue";

import { useMemberStore } from "@/stores/members";
import CategoryCityVeiw from "@/views/pages/CategoryView/index.vue";
import NotFoundVue from "@/views/pages/NotFound.vue";
import Test from "@/views/pages/Test/index.vue";
import TransactionInfoVue from "@/views/pages/CheckoutView/TransactionInfo.vue";
import PaymentOptionVue from "@/views/pages/CheckoutView/PaymentOption.vue";
import VirtualAccountVue from "@/views/pages/CheckoutView/VirtualAccount.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      children: [
        {
          path: "/test",
          component: Test,
        },
        {
          path: "",
          component: IndexView,
          children: [
            { path: "", component: HomeView },
            { path: "city-view/:city/mapsview", component: MapsView },
          ],
        },
        { path: "/city-view/:city", component: CategoryCityVeiw },
        {
          path: "/package/:place",
          component: DetailPackViewVue,
          props: true,
        },
        { path: "/compare", component: CompareViewVue },
        { path: "/forgot", component: InputEmailVue },
        { path: "/forgot/sended", component: ConfirmEmailVue },
        {
          path: "/checkout",
          component: CheckOutView,
          children: [
            { path: "", component: TransactionInfoVue },
            { path: "/checkout/payment", component: PaymentOptionVue },
          ],
        },
        { path: "/payment/settlement/:trans_uuid", component: VirtualAccountVue },
        {
          path: "/account",
          component: MemberArea,
          meta: {
            requiresAuth: true,
          },
          children: [
            { path: "", component: MemberProfile },
            { path: "/account/messages", component: Messages },
            { path: "/account/notification", component: Notification },
            { path: "/account/favorite", component: Favorite },
            { path: "/account/orders", component: Orders },
          ],
        },
      ],
      component: LandingPageVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      children: [
        { path: "", component: LoginView },
        { path: "/register", component: RegisterView },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotFoundVue },
  ],
});
router.beforeEach((to, from) => {
  const store = useMemberStore();
  const pathException = ["/login", "/register"];
  if (pathException.includes(to.path) && store.isLogin) {
    return "/";
  }
  if (to.matched.some((record) => record.meta.requiresAuth) && !store.isLogin) {
    return "/login";
  }
});
export default router;
