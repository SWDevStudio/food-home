<template>
  <footer class="footer">
    <div class="footer__container container">
      <v-button class="footer__button">
        Регистрация
      </v-button>
      <div class="footer__line">
        <span class="footer__text">
          Уже зарегистрированы?
        </span>
        <n-link class="footer__link" to="form/login">
          Войти
        </n-link>
      </div>
    </div>
  </footer>
</template>

<script>
import VButton from '~/components/common/Button'
export default {
  name: 'Footer',
  components: { VButton }
}
</script>

<style lang="stylus">
.footer {
  font-family $font
  &__line {
    display flex
    justify-content space-around
    margin-top 16px
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
