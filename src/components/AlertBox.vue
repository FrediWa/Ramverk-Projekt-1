<template>
  <div>
    <button @click="alertDisplay" type="button" class="btn btn-warning">Where is the Taxistation? </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      alertDisplay() {
        this.$swal({
          title: '<i>Taxistation</i>',
          html:
            'Find the Taxi rank by going straight to Terminal 5. Thereafter turn left and you' +
            ' will find our Taxi ranks. <br>' + 

            '<em><br>You could also download the free <a href="https://apps.apple.com/fi/app/meneva/id1403831005?ls=1">Menevä app</a> ' +  
            'for ordering a taxi online</em>',
          showCloseButton: true,
          focusConfirm: false,
        })
      }
    }
  }
</script>
