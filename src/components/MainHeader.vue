<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="logo"
      >
        Кинотеатр
      </router-link>
      <div class="links">
        <router-link
          :to="{ name: 'films' }"
        >
          Фильмы
        </router-link>
        <button
          type="button"
          class="auth-button"
          @click="changeUserState"
        >
          {{ auth ? 'Выйти' : 'Войти' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      auth: false
    }
  },
  created() {
    this.auth = localStorage.getItem('auth') !== null
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'main'})
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    }
  }
}
</script>

<style scoped>
header {
background-color: #0c0c0c;
padding: 20px 0 ;
}
.container {
margin-top: 0;
display: flex;
align-items: baseline;
}
a {
text-decoration: none;
font-weight: 700;
color: #ffffff;
font-size: 25px;
}
.logo {
color: #EB5804;
font-size: 30px;
}
.links {
margin-left: 75px;
display: flex;
flex-grow: 1;
}
.auth-button {
margin-left: auto;
font-size: 16px;
background: blue;
font-weight: 500;
border: 1px solid white;
padding: 5px 10px;
color: wheat;
border-radius: 3px;
}

</style>
