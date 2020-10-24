<template>
  <form class="form">
    <template v-for="(input, key) in inputs" :key="key">
      <v-input v-if="input.type === 'input'" />
      <v-select v-else-if="input.type === 'select'" />
    </template>
  </form>
</template>

<script>
import VInput from '~/components/form/v-input'
import VSelect from '~/components/form/v-select'
export default {
  name: 'Form',
  components: { VInput, VSelect },
  props: {
    inputs: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus">

</style>
