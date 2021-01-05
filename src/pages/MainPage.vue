<template>
  <div class="main-page">
    <h1>
      Фильмы онлайн
    </h1>
    <button type="button" class="btn-to" @click="$router.push({ name: 'films' })">Перейти к фильмам</button>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h1 {
  color: #ffffff;
  font-size: 70px;
  margin-bottom: 20px;
}
.btn-to{
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
}
  
</style>
