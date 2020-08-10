<template>
<v-col>
  <v-row>
    <v-col style="margin-left:228px; margin-top:10px">
      <h1 >{{data.heades}}</h1>
    </v-col>
  </v-row>


  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto mt-2 " max-width="800">
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

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="grey lighten-1">
            <!-- <v-btn >See more info</v-btn> -->
            
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  </v-col>
  
</template>



<script>
export default {
  props: ["data"],
  data: () => ({
    overlay: false
  })
};
</script>