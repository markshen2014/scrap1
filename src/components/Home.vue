<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-alert type="info" :value="true">
          Scrapit version 5.0 is released in March 2018
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="yard in yards"
            :src="yard.imageUrl"
            :key="yard.id">
              <div class="title">
                {{ yard.title }}
              </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p class="blue--text">Contact us if you want to know Scrapit in detail</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        yards: [
          { imageUrl: 'http://images.jdmagicbox.com/comp/hyderabad/a2/040pxx40.xx40.170828104843.d4a2/catalogue/al-hamad-scrap-merchants-golconda-fort-hyderabad-scrap-buyers-49hb1og.jpg', id: 'afajfjadfaadfa323', title: 'Toronto Yard' },
          { imageUrl: 'http://scrapbuyerss.com/images/Aluminium-Scrap-Buyer.jpg', id: 'aadsfhbkhlk1241', title: 'New York Yard' },
          { imageUrl: 'https://content3.jdmagicbox.com/comp/hyderabad/r6/040pxx40.xx40.141107200908.i6r6/catalogue/titan-steels-musheerabad-hyderabad-scrap-buyers-3lxgsc2.jpg', id: 'aadsfhbkhlk1241a', title: 'Boston Yard' }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 40px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding-bottom: 20px;
    transform: translateX(-50%);
    left: 50%;
  }
</style>
