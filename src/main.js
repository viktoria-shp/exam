import "./styles/style.scss";
import "./styles/libs/antd.scss";

import Antv from "ant-design-vue";
import App from "./App.vue";
import Vue from "vue";
import VueCarousel from "vue-carousel";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false;

Vue.use(Antv);
Vue.use(VueCarousel);
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCCtqo1cC4VpQfgYyZunS0bHpCk4IV0ATU",
    libraries: "places" 
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
