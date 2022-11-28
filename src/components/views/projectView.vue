<template>
  <div class="pt-28 z-0 flex flex-col gap-14 container mx-auto px-5 md:px-0">
    <h1
      class="text-secondary uppercase text-5xl font-extrabold text-center mt-10"
    >
      {{ project.name }}
    </h1>
    <a
      target="_blank"
      :href="project.link"
      class="w-fit bg-marrone1 text-background font-semibold text-3xl px-3 py-2 mx-auto hover:bg-marrone2"
    >
      OPEN LIVE DEMO
    </a>
    <div class="image w-full flex justify-center">
      <img class="w-2/3" :src="image" alt="" />
    </div>
    <div class="description text-2xl font-semibold">
      <h2 class="text-marrone1 uppercase text-3xl font-extrabold">
        Project Overview
      </h2>
      <p ref="description" class="text-tertiary text-description text-xl font-medium mt-10">
      </p>
    </div>
    <div class="tech flex flex-col gap-5">
      <h2 class="text-marrone1 uppercase text-3xl font-extrabold">
        Technologies
      </h2>
      <ul
        class="pill flex flex-wrap gap-4 text-1xl mt-10 max-w-7xl mx-auto justify-center"
        ref="skills"
      >
        <li v-for="(tech, index) in project.technologies" :key="index">
          {{ tech }}
        </li>
      </ul>
    </div>
    <div v-if="project.extraImages" class="">
        <h2 class="text-marrone1 uppercase text-3xl font-bold mb-10">Some screen of site</h2>
        <div class="flex flex-wrap gap-5">
            <img v-for="(image, index) in project.extraImages" :key="index" :src="getImg(image,index)" alt="" class="w-full">
        </div>
    </div>
    <div class="back">
    <a
      @click="$router.back()"
      class="w-fit ring-4 cursor-pointer ring-marrone1 text-tertiary font-semibold text-3xl px-3 py-2 mx-auto hover:bg-marrone1 hover:text-background"
    >
      BACK
    </a>
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects";
export default {
  data() {
    return {
      project: undefined,
      image: undefined,
    };
  },
  created() {
    window.scrollTo(0, 0);
    projects.forEach((project) => {
      if (project.slug === this.$route.params.slug) {
        this.project = project;
      }
    });

    if (!this.project) {
      this.$router.push("/");
    }

    this.image = new URL(
      `/src/assets/projects/${this.project.image}`,
      import.meta.url
    ).href;

    console.log(this.project);
  },
  mounted() {
    if(this.project.longDescription) {
    let string = this.project.longDescription.split('.');
    string.forEach((s, index) => {
      if (index === string.length - 1) {
        this.$refs.description.innerHTML += `<p> ${s}</p>`;
      } else {
        this.$refs.description.innerHTML += `<p>${s}.</p>`;
      }
    })

    console.log(string)  
    }
    else {
      this.$refs.description.innerHTML = this.project.description;
    }
  },
  methods: {
    getImg(image) {
      let img = new URL(`/src/assets/projects/${this.project.extraImagesPath}/${image.image}`, import.meta.url).href;
      console.log(img)
      return img
    },
  },
};
</script>

<style lang="scss">
.pill > li {
  background-color: #30435e;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 30px;
  display: flex;
  gap: 0.2rem;
  align-items: center;
}
</style>
