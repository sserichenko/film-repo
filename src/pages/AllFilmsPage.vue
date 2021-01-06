<template>
  <div class="films-page container">
    <h2>Выбери фильм на свой вкус</h2>
    <FilmsList :films="films" />
    <button
      type="button"
      class="pagination-button"
      @click="showMoreFilms"
    >
    More films
    </button>
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
      page: 1
    }
  },

  methods: {
    showMoreFilms(){
      this.page++
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=${this.page}`)
      .then(response => {
    this.films = [...this.films,...response.data.results]
    window.filmArray = [...window.filmArray,...response.data.results]
    console.log('window.filmArray', window.filmArray);
    })
    
    .catch(err => {
        console.error(err);
      });
      
    },
    getFirstData(){
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=${this.page}`)
    .then(response => {
    this.films = response.data.results
    window.filmArray = [...response.data.results]
    })
    
  .catch(err => {
      console.error(err);
    });
  },
  },
  
  mounted(){
    this.getFirstData();
  }
}
</script>

<style scoped>

.films-page{
  text-align: center;
}


h2 {
  font-size: 40px;
  color:#ffffff;
  margin-bottom: 30px;
}
.pagination-button{
  width: 100px;
  height: 30px;
  margin: 0 auto;
}
</style>
