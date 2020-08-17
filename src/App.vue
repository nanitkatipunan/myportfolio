<template>
  <v-app>
    <v-card>
      <v-app-bar color="primary" dense fixed>
        <v-spacer></v-spacer>

        <v-btn text style="color:white" to="/">Home</v-btn>

        <v-btn text style="color:white" to="/about">About</v-btn>

        <v-btn text style="color:white" to="/contacts">Contacts</v-btn>
      </v-app-bar>
    </v-card>
    <v-main class="brown lighten-4 mt-8">
      <router-view></router-view>
    </v-main>

    <v-footer color="primary" padless app absolute>
      <v-row justify="center" no-gutters>
        <!-- <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn> -->
        <v-col class="primary py-4 text-center white--text" cols="12">
          <!-- {{ new Date().getFullYear() }} —
          <strong>nanitkatipunan</strong>-->
          <v-icon class="mr-5">mdi-facebook</v-icon>
          <v-icon class="mr-1">mdi-gmail</v-icon>
          <v-icon class="ml-5">mdi-instagram</v-icon>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";

export default {
  // name: 'home',
  components: {
    // Navbar
  },

  data: () => ({
    //
  })
};
</script>
<style>
.v-application a {
  color: white;
}
</style>

