<template>
  <v-card class="mx-auto mt-8" max-width="800">
    <pdf src="./pdf/resume.pdf"></pdf>
  </v-card>
</template>
 
<script>
import pdf from "vue-pdf";

export default {
  name: "resume",
  components: {
    pdf
  }
};
</script>
<style>

</style>
