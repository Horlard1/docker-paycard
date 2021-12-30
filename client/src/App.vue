<template>
  <div class="wrapper" id="app">
    <CardForm
      :form-data="formData"
      @input-card-number="updateCardNumber"
      @input-card-name="updateCardName"
      @input-card-month="updateCardMonth"
      @input-card-year="updateCardYear"
      @input-card-cvv="updateCardCvv"
    />
    </div>
</template>

<script>
import CardForm from '@/components/CardForm'
export default {
  name: 'app',
  components: {
    CardForm
  },
  data () {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      }
    }
  },
  methods: {
    updateCardNumber (val) {
      this.formData.cardNumber = val
    },
    updateCardName (val) {
      this.formData.cardName = val
    },
    updateCardMonth (val) {
      this.formData.cardMonth = val
    },
    updateCardYear (val) {
      this.formData.cardYear = val
    },
    updateCardCvv (val) {
      this.formData.cardYear = val
    }
  },
  mounted () {
    this.$i18n.locale = navigator.language
  }
}
</script>

<style lang="scss">
@import '../src/assets/style.scss';
</style>
