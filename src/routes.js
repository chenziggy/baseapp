import App from "@/App.vue";
import SubApp from '@/components/SubApp.vue'
const routes = [
  {
    path: "/",
    redirect: '/helloworld',
    component: App,
  },
  {
    path: "/helloworld",
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: "/subapp",
    name: "subApp",
    component: SubApp,
  }
];

export default routes;
