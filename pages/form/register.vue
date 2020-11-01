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
        Регистрация
      </h2>
      <form class="form-page__form form">
        <v-input
          v-model="formData.name"
          name="Имя"
          class="form__input"
        />
        <v-input
          v-model="formData.email"
          name="E-mail"
          type="email"
          class="form__input"
        />
        <v-select
          v-model="formData.howAreYou"
          name="Кто вы?"
          :options="optionsSelect"
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
          Регистрация
        </button>
      </form>
      <n-link
        to="/form/login"
        class="form-page__link link"
      >
        Войти
      </n-link>
    </div>
  </section>
</template>

<script>
import VSelect from '~/components/form/v-select'
import VInput from '~/components/form/v-input'
import FormMixins from '~/mixins/formMixins'
export default {
  name: 'Login',
  components: { VSelect, VInput },
  mixins: [FormMixins],
  layout: 'empty',
  data () {
    return {
      errorMessage: '',
      optionsSelect: [
        'Клиент',
        'Курьер',
        'Компания'
      ],
      formData: {
        name: '',
        email: '',
        howAreYou: '',
        password: ''
      }
    }
  },
  methods: {
    sendForm () {
      this.$store.commit('errors/SUMMON_USER_ALERT', 'Опять работа')
    }
  }
}
</script>

<style lang="stylus">
@import "./form.styl"
</style>
