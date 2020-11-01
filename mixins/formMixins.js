export default {
  methods: {
    exitForm () {
      console.log('FORM EXIT')
    },
    sendForm (val) {
      console.log(val)
    }
  },
  computed: {
    fullForm () {
      for (const item in this.formData) {
        if (this.formData[item]) {
          return true
        }
      }
      return false
    }
  }
}
