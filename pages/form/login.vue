<template>
  <section class="form-page">
    <div class="form-page__container container">
      <div class="form-page__header">
        <n-link to="/">
          <img
            src="/img/general/exit.svg"
            alt=""
            class="form-page__exit"
            @click="exitForm"
          >
        </n-link>
      </div>
      <h2 class="form-page__title title">
        Войти
      </h2>
      <form class="form-page__form form">
        <v-input
          v-model="formData.email"
          name="E-mail"
          type="email"
          class="form__input"
        />
        <v-input
          v-model="formData.password"
          name="Пароль"
          type="password"
          class="form__input"
        />
        <button
          class="button form__button"
          :disabled="!fullForm"
          @click.prevent="sendForm()"
        >
          Войти
        </button>
      </form>
      <div class="form-page__links">
        <n-link
          to="/form/register"
          class="form-page__link link"
        >
          Регистрация
        </n-link>
        <n-link
          to="/"
          class="form-page__link link"
        >
          Забыли пароль?
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
import VInput from '@/components/form/v-input'
import formMixins from '@/mixins/formMixins'
export default {
  name: 'Login',
  layout: 'empty',
  components: { VInput },
  mixins: [formMixins],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="stylus">
@import "./form.styl"
</style>
