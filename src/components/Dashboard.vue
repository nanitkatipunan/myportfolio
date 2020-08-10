<template  >
  <div>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card :elevation="hover ? 24 : 6" class="mt-8 mx-auto ml-10" tile color="white">
              <v-row align="center" justify="center">
                <v-col cols="12">
                  <div class="text-center">
                    <v-avatar class="mx-auto" color="grey" size="166">
                      <v-img src="@/assets/nanit.jpg"></v-img>
                    </v-avatar>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="font-weight-bold display-1 text-center">
                    Nanit
                    <br>Katipunan
                  </div>
                  <br>
                  <div class="overline text-darken-1 mb-2 text-center">SOFTWARE DEVELOPER</div>
                </v-col>
              </v-row>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <div>
          <h1 class="hello font-weight-bold">Hello</h1>
          <h2 class="font-weight-regular">Here's who I am and what I do</h2>
          <v-btn rounded color="primary" to="/Resume" dark>Resume</v-btn>
          <v-btn rounded color="secondary" class="contact" to="/Contacts" dark>Contact</v-btn>
        </div>

      </v-col>
      
      <!-- <v-col cols="5"></v-col> -->
      <v-col cols="7">
        <v-card flat class="pr-10 py-10" color="transparent">
          <p class="text-justify font-weight-normal text-right">
            Hi! I am Nanit Fuentes Katipunan.
            I'm a software developer, I want explore career options in
            the IT sector where I can fully utilize my skills and knowledge,
            and further enhance them to contribute to my development as
            a person; and to be able to be a part of a team whose development
            I can contribute as a member, in preparation for my future career.
          </p>
          <!-- <v-avatar class="ml-2" color="grey" size="80">
            <v-img src="@/assets/nanit.jpg"></v-img>
          </v-avatar>-->
        </v-card>
        <v-divider></v-divider>
       <v-row>
        <v-col cols="12" >
          <h1 class="hello font-weight-bold text-center" style="font-size: 30px">
            "It’s fine to celebrate success
            but it is more important to heed the lessons of failure."
          </h1>
          <div class="overline text-darken-1 mb-2 text-center">-Bill Gates</div>
          <v-divider></v-divider>
        </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.hello {
  font-size: 150px;
}

.contact {
  margin-left: 2%;
}
</style>

