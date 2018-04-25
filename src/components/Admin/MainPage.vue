<template>
  <v-container>
      <v-jumbotron color="grey lighten-2" height="200px">
       <v-container>
        <v-layout align-center>
          <v-flex xs12>
            <h3 class="display-1">Welcome to Scrapit</h3>
            <span class="subheading">The software will help you a lot</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Check out our newest features!</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <!--
    <v-layout row mt-2>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="success" icon="new_releases" :value="true" @click = "goScaleTicket">
          Check Scale Ticket
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="info" icon="brightness_7" :value="true">
          Check Packing Slip
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert type="warning" icon="developer_board" :value="true">
             Check Site settings
        </v-alert>
      </v-flex>
    </v-layout> -->
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
