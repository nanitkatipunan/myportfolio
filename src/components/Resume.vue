<template>
  <v-card class="mx-auto mt-8" max-width="800">
     <a
      href="https://drive.google.com/uc?export=download&id=1mfKLXfXYA64DWdTs6hltdH72PDSHJ1aN"
   
      type="button "
      class="btn btn-primary pdf"
     style="color:white"
      
    >Download PDF</a>
   
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
