<template>
  <v-container>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-alert type="warning" icon="developer_board" :value="true">
          Scale ticket
      </v-alert>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'ScaleTicketYard',
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
