<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="success" :value="true">
          This is a success alert.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="info" :value="true">
          This is a info alert.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="warning" :value="true">
             This is a warning alert. test
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
    export default {

      computed: {
        user () {
          return this.$store.getters.user
        }
      },

      created () {
        if (this.user === null || this.user === undefined) {
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>

</style>
