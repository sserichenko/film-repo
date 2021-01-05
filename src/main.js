import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)

import '@/assets/styles/main.css';


new Vue({
  render: h => h(App),
  el: '#app',
  router
})




// fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=2`)
// .then(response => response.json())
// .then(json => {
//   // this.todos = json
//   // this.loading = false
//   console.log('json', json.results);
// })
// .catch(err => {
// 	console.error(err);
// });






// fetch("https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=2", {
// })
// .then(response => response.json())

// .catch(err => {
// 	console.error(err);
// });

