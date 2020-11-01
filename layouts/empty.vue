<template>
  <div class="app">
    <Alert />
    <Nuxt />
  </div>
</template>

<script>
import Alert from '@/components/common/Alert'
export default {
  name: 'Empty',
  components: { Alert }
}
</script>
