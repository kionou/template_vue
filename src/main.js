import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 require("@/assets/css/fontawesome.css")
 require( "@/assets/css/templatemo-cyborg-gaming.css")
url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap")
  
   require("@/vendor/bootstrap/css/bootstrap.min.css") 
   require("@/assets/css/fontawesome.css")
 require("@/assets/css/templatemo-cyborg-gaming.css")
  //  require("@/assets/css/owl.css")

   require("@/assets/css/animate.css")
   url("https://unpkg.com/swiper@7/swiper-bundle.min.css")

  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
