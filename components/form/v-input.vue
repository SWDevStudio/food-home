<template>
  <label class="input">
    <span
      v-if="name"
      class="input__name"
    >
      {{ name }}
    </span>
    <span class="input__field" :class="showIcon">
      <input
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
    </span>

  </label>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    name: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    icon: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    showIcon () {
      if (this.icon) {
        return 'input__field--' + this.icon
      }
      switch (this.type) {
        case 'email':
          return 'input__field--send'
        case 'password':
          return 'input__field--password'
        case 'date':
          return 'input__field--date'
      }
      return ''
    }
  }
}
</script>

<style lang="stylus">
.input {
  cursor: pointer;

  span {
    display: block;
  }

  &__name {
    font-family: $font;
    font-size: $size__text;
    line-height: 16px;
    color: $color__text;
    margin-bottom: 10px;
  }

  &__field {
    width: 100%;
    height: 40px;
    position: relative;
    background-color $background__input
    &:before {
      content: "";
      position: absolute;
      width: 38px;
      height: 100%;
      border-right: rgba(184, 184, 184, 0.2) 1px solid;
      background-image: url("/img/general/user.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 15px 15px;
    }

    input {
      color: $color__text;
      font-family: $font;
      font-size: $size__text;
      box-sizing: border-box;
      height: inherit;
      width: inherit;
      appearance: none;
      background: transparent;
      padding-left: 51px;
      border: 1px solid rgba(184, 184, 184, 0.2);
      border-radius: 5px;
    }

    &--send {
      &:before {
        background-image: url("/img/form/email.svg");
      }
    }

    &--password {
      &:before {
        background-image: url("/img/form/password.svg");
      }
    }

    &--date {
      &:before {
        background-image: url("/img/form/calendar.svg");
      }
    }

    &--search {
      &:before {
        background-image: url("/img/general/search-icon.svg");
      }
    }
  }

  &__icon {
    position: absolute;
  }
}
</style>
