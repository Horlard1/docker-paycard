<template>
  <div class="wrapper" id="app">
    <CardForm
      :form-data="formData"
      @datas="setData"
      @load ="toggleLoad"
      @err="toggleModal"
      @input-card-number="updateCardNumber"
      @input-card-name="updateCardName"
      @input-card-month="updateCardMonth"
      @input-card-year="updateCardYear"
      @input-card-cvv="updateCardCvv"
    />
    <div v-if="showModal">
      <Modal :datas="datas" @close="toggleModal"/>
    </div>
    <div v-if="loading">
      <Load />
    </div>
  </div>
</template>

<script>
import CardForm from '@/components/CardForm'
import Modal from '@/components/Modal'
import Load from '@/components/Load'
export default {
  name: 'app',
  components: {
    CardForm,
    Modal,
    Load
  },
  data () {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      },
      showModal: true,
      loading: false,
      datas: null
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
    },
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleLoad () {
      this.loading = !this.loading
    },
    setData (val) {
      this.datas = val
      this.toggleModal()
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
