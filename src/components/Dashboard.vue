<template  >
  <div>
    <v-parallax src="@/assets/nan.png">
      <v-col cols="12">
        <div>
          <h1 class="hello mt-12 font-weight-bold">
            Hello,
            <br>I'm Nanit
          </h1>
          <br>
          <!-- <h2 class="font-weight-regular">Here's who I am and what I do</h2> -->

          <v-btn rounded color="primary" to="/Resume" dark>Resume</v-btn>
          <v-btn rounded color="secondary" class="contact" to="/Contacts" dark>Contact</v-btn>
        </div>
      </v-col>
    </v-parallax>

    <v-row>
      <v-col cols="3">
        <v-card flat class="pr-10 py-10" color="transparent">
          <v-img class="ml-10" src="@/assets/nn.jpg"></v-img>
        </v-card>
      </v-col>

      <v-col cols="5">
        <p class="text-justify font-weight-normal mr-12" style="margin-top:20%">
          Hi! I am Nanit Fuentes Katipunan.
          I'm a software developer, I want explore career options in
          the IT sector where I can fully utilize my skills and knowledge,
          and further enhance them to contribute to my development as
          a person; and to be able to be a part of a team whose development
          I can contribute as a member, in preparation for my future career.
        </p>
      </v-col>
      
      <v-col cols="12" >
        <h1 class="ml-10" style=" font-size: 50px;" ><b>SKILLS</b></h1>
        <v-row>
          
          <v-col cols="3" v-for="data in skills" :key="data.names">
            <v-card class="mx-auto " max-width="200">
              <v-img :src="data.images" height="200px"></v-img>

              <!-- <v-card-title>{{data.names}}</v-card-title> -->

              <!-- <v-card-subtitle>{{data.subtitle}}</v-card-subtitle> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.hello {
  font-size: 100px;
  font-family: Comic Sans MS;
  text-shadow: 2px 2px 4px #000000;
}

.contact {
  margin-left: 2%;
}
</style>

<script>
export default {
  data: () => ({
    skills: [
      {
        images:
          "https://blog.kakaocdn.net/dn/emC9Fk/btqzbEJboFG/3W9JnbnqW1gVxkngJ4dhOK/img.jpg",
        // names: "Java",
        // subtitle: "jsdhsjadh"
      },
      {
        images:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBgISwy4e57KAGvzSpOAj701kqZaYC-Pu6vQ&usqp=CAU",
      
      },
       {
        images:
          "https://coryrylan.com/assets/images/posts/types/angular.svg",
      
      },
       {
        images:
          "https://www.kindpng.com/picc/m/206-2061319_vue-js-icon-svg-hd-png-download.png",
      
      },
      {
        images:
          "https://broadwayinfosys.com/uploads/courses/mongodb.png",
      
      },
      {
        images:
          "https://cdn.iconscout.com/icon/free/png-256/mysql-3-226025.png",
      
      },
      {
        images:
          "https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png",
      
      },
      {
        images:
          "https://cdn.iconscout.com/icon/free/png-256/python-21-1175116.png",
      
      },
    ]
  })
};
</script>


