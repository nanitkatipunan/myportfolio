<template>
  <v-app>
    <HomePage></HomePage>
    <v-main class="brown lighten-4 mt-8">
      <router-view></router-view>
    </v-main>

    <v-footer color="primary" padless app absolute>
      <v-row justify="center" no-gutters>
        <!-- <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn> -->
        <v-col class="primary py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HomePage from "@/components/Navbar.vue";

export default {
  // name: 'home',
  components: {
    HomePage
  },

  data: () => ({
    //
  })
};
</script>
