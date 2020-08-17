<template>
<v-col>
  <v-row>
    <v-col style="margin-left:228px; margin-top:10px">
      <h1 >{{data.heades}}</h1>
    </v-col>
  </v-row>


      <v-card class="mx-auto mt-2 card" max-width="800">
        <v-card-text>
          <v-row>
            <v-col cols="5" style="padding-left:5%;">
              <h2 class="title primary--text font-weight-bold">{{data.title}}</h2>
              <!-- <p>{{data.description}}</p> -->
              <p class="overline">{{data.company}}</p>
              <p>{{data.location}}</p>
            </v-col>
            <v-col cols="6" style="padding-top:10%;text-justify:interword">
              <v-img :src="data.image" height="200px"></v-img>
              <h6 class="text-justify caption font-weight-medium text-right">{{data.paragraph}}</h6>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  </v-col>
  
</template>



<script>
export default {
  props: ["data"],
  data: () => ({
  })
};
</script>
<style scoped>
  .card:hover{
    background-color:rgba(220,220,220, 0.4)
  }
</style>
