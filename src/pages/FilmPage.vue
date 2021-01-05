<template>
<div class="film-page">
  <div class="container" v-if="film">
    <h1>{{ film.title }}</h1>
    <img
      :src="'https://image.tmdb.org/t/p/w300' + film.poster_path"
      :alt="film.title"
    >
    <div class="section">
      <p class="section__title">Кратко о сюжете картины:</p>
      <p class="section__description">{{ film.overview }}</p>
    </div>
    <div class="section">
      <p class="section__title">Рейтинг фильма:</p>
      <p class="section__description">{{ film.popularity }}</p>
    </div>
    <div class="section">
      <p class="section__title">Дата релиза:</p>
      <p class="section__description">{{ film.release_date }}</p>
    </div>
    <div class="section">
      <p class="section__title">Возрастные ограничения:</p>
      <p class="section__description">{{ film.adult ? '21+' : '16+' }}</p>
    </div>
    <div class="section">
      <p class="section__title">Оригинальное название:</p>
      <p class="section__description">{{ film.original_title }}</p>
    </div>
    
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      film: null,
      films: []
    }
  },

  mounted() {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cca4f3f0eccebecd8c46e6ebdb81f687&language=en-US&page=2`)
  .then(response => {
    this.films = response.data.results
    window.filmArray = [...response.data.results]
    const film = window.filmArray.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
    }
    })
    
  .catch(err => {
      console.error(err);
    });

  }
}
</script>

<style scoped>

.film-page {
  padding-bottom: 100px;
  }
.film-page .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
  }

.film-page  h1 {
color: #be2828;
margin-bottom: 30px;
padding-bottom: 15px;
position: relative;
}
.film-page  h1::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
}

.film-page  img {
object-fit: cover;
border-radius: 10px;
width: 390px;
height: auto;
margin-bottom: 30px;
}

.film-page .section__title {
    color: #EB5804;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
}
.film-page .section__description {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
}

</style>
