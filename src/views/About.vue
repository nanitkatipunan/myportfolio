
<template>
  <div>
    <AboutCard v-for="info in infos" :data="info" :key="info.title"></AboutCard>
  </div>
</template>

<script>
import AboutCard from "@/components/About.vue";
export default {
  components: {
    AboutCard
  },
  data: () => ({
    infos: [
      {
        heades: "EDUCATION",
        title: "2013-2018",
        company: "SISTERS OF MARY SCHOOL-GIRLSTOWN",
        location: "J.P Rizal Street, Talisay City Cebu",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk_uDpH_NqHXmxn-f7E2Qrb9UPc9igrRAaPA&usqp=CAU",
        paragraph:
          "The Sisters of Mary School (SMS) is a Catholic school, where I studied highschool and senior highschool. I am a scholar at this school. "
      },
      {
        title: "2018-2021",
        company: "UNIVERSITY OF SAN CARLOS",
        location: "Gov. M. Cuenco Ave, Cebu City, 6000 Cebu",
        image: "https://cebucity.org/wp-content/uploads/2016/12/DSC_8521.jpg",
        paragraph:
          "The University of San Carlos (USC or colloquially shortened to San Carlos) is a private Catholic research university in Cebu City, Philippines ."
      },
      {
        heades: "INTEREST",
        title: "VOLLEYBALL",
        company: "Sport/Recreational Activity",
        // location: "location",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDVv8BdzI0jyGciCcf06r3UJSxHn74kLMefw&usqp=CAU",
        paragraph:
          "I love playing volleyball. This sport is one of my favorite sport"
      },
  
      {
        title: "PHOTOGRAPHY",
        company: "Leisure Activity",
        image:
          "https://3.imimg.com/data3/LX/YE/MY-13323507/natural-photography-500x500.png",
        paragraph:
          "Taking picture to nature and playing with the camera is one of my hobby."
      },
      {
        heades:"Hobbies",
        title: "SINGING ",
        company: "Hobby",
        image:
          "https://www.wallpapertip.com/wmimgs/13-136262_child-singing.jpg",
        paragraph: " Singing improves my mood, I also find it as very effective as a stress reliever. I also sing during special occasions and had been invited as a guest singer in many events."
      },
      {
        title: "DANCING",
        company: "Hobby",
        image:
          "data:image/jpeg;base64,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",
        paragraph: "I love dancing. I dance during special occasions like birthday party, anniversaries and other special events."
      },
      {
        title: "HOSTING EVENTS",
        company: "Hobby",
        image:"https://miro.medium.com/max/560/1*HaPWF6pr2hCFA87gPXMAng.png",
        paragraph: "I find it interesting in hosting events. I have been a host in different events like birthday party, anniversaries and special celebrations"
      },
    ]
  })
};
</script>

<style>
</style>
