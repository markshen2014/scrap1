<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-alert type="info" icon="brightness_7" :value="true">
          Check Packing Slip
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'PackingSlipYard',
      data () {
        return {
          message: '',
          error: ''
        }
      }
    }
</script>

<style scoped>

</style>
