<template>
  <div class="films-page container">
    <h2>Выбери фильм на свой вкус</h2>
    <FilmsList :films="films" />
  </div>
</template>

<script>
import axios from 'axios';
import FilmsList from '../components/FilmList'
window.filmArray = [];
export default {
  components: { FilmsList },
  data() {
    return {
      films:[],
    }
  },

created(){
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=2`)
  .then(response => {
    this.films = response.data.results
    window.filmArray = [...response.data.results]
    })
    
  .catch(err => {
      console.error(err);
    });
}
}
</script>

<style scoped>
h2 {
  font-size: 40px;
  color:#ffffff;
  margin-bottom: 30px;
}
</style>
