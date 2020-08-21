<template>
<div>
  <v-card class="mx-auto mt-8" max-width="800">
     <a
      href="https://drive.google.com/uc?export=download&id=1AqCis2Nq8MJ6PBSNJTFbZHJagIwbOwtv"
   
      type="button "
      class="btn btn-primary pdf"
     style="color:white"
      
    >Download PDF</a>
   
    <pdf src="./pdf/resumef.pdf"></pdf>
  
    <!-- <pdf src="./pdf/resumetwo.pdf"></pdf> -->
  </v-card>
<v-card class="mx-auto mt-8" max-width="800">
    <pdf src="./pdf/resumetwo.pdf"></pdf>
  </v-card>
</div>
</template>
 
<script>
import pdf from "vue-pdf";

export default {
  name: "resumef",
  namesec:"resumetwo",
  components: {
    pdf
  }
};
</script>
<style>
</style>
