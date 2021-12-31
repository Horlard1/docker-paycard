<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <div v-if="datas">
                <h1>Payment Info</h1>
                <div class="details">
                    <p>Paid By: </p>
                    <h3>{{ datas.payer }}</h3>
                </div>
                <div class="details">
                    <p>Date Paid: </p>
                    <h3>{{ datas.details.time }}</h3>
                </div>
                <div class="details">
                    <p>Payment Id: </p>
                    <h3>{{ datas.paymentId }}</h3>
                </div>
            </div>
            <div v-else>
                <div class="error_modal">
                    <h1>Error Occurred</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    closeModal () {
      this.$emit('close')
    }
  },
  props: ['datas']
}
</script>
<style scoped>
  .modal{
      width: 500px;
      padding: 1.5em;
      margin: 2em auto;
      min-height: 300px;
      background: white;
      border-radius: 10px;
  }
  .modal h1{
      text-align: center;
  }
  .modal .details{
      display: flex;
      align-items: center;
  }
  .modal .details p{
      width: 25%;
      margin-right: 1em;

  }
  .modal .details h3{
      justify-self: center;
  }
  .error_modal{
      background: #eee;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em auto;
  }
  .backdrop{
      top: 0;
      left: 0;
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 98765432;
  }
</style>
