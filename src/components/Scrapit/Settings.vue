<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-alert type="success" icon="new_releases" :value="true" >
          Check Settings here
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'Settings',
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
