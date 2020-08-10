
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
          "https://lh3.googleusercontent.com/proxy/tfFgJi-i9NHXR4Rt8xK54t3kLl09h_yKC5HFHuiPkIH6D9FU5St-9FnPno3g-NgksZC8VhETrRUSSUsOAbiE_EcQHZhmFG-KtGD6OCaxgnK6qUnmGMjPBz6JfIsVQmlsp53-brBErg",
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
          "I love playing volleyball. This sport is one of my favorite sport, though I'm not really good it"
      },
  
      {
        title: "PHOTOGRAPHY",
        company: "Leisure Activity",
        image:
          "https://3.imimg.com/data3/LX/YE/MY-13323507/natural-photography-500x500.png",
        paragraph:
          "Taking picture to nature and playing with the camera is one of my hubby"
      },
      {
        heades:"Hobbies",
        title: "SINGING",
        company: "Hobby",
        image:
          "https://www.wallpapertip.com/wmimgs/13-136262_child-singing.jpg",
        paragraph: "I love singing. Singing is my stress reliever."
      },
      {
        title: "DANCING",
        company: "Hobby",
        image:
          "https://www.wallpapertip.com/wmimgs/13-136262_child-singing.jpg",
        paragraph: "I love singing. Singing is my stress reliever."
      },
    ]
  })
};
</script>

<style>
</style>
