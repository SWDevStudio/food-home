<template>
  <footer class="footer">
    <div class="footer__container container">
      <button
        class="button footer__button"
        @click="$router.push('/form/register')"
      >
        Регистрация
      </button>
      <div class="footer__line">
        <span class="footer__text">
          Уже зарегистрированы?
        </span>
        <n-link class="footer__link link" to="form/login">
          Войти
        </n-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus">
.footer {
  font-family $font
  display flex
  flex-direction column
  &__container {
    display flex
    flex-direction column
    flex 1 1 auto
  }
  &__button {
    margin-bottom 16px
  }
  &__line {
    display flex
    justify-content space-around
    margin-top auto
    margin-bottom 20px
  }
  &__text {
    color $color__text
    font-size $size__text
  }
  &__link {
    font-size $size__text--small
    color $color__theme
  }
}
</style>
