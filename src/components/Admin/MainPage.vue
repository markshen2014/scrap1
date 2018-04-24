<template>
   <div>
     main page
   </div>
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
