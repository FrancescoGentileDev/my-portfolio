<template>
  <div id="projects" class="container mx-auto">
    <title-component
      title="projects"
      subTitle="Here you will find some of my project with a live demo"
    />
    <div class="projects-container flex flex-col mt-16 gap-24">
      <project-component
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
        :reverse="index % 2 !==0"
      />
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/projectComponent.vue";
import titleComponent from "../components/titleComponent.vue";
import projects from "@/data/projects.js";
export default {
  components: { titleComponent, ProjectComponent },
  data() {
    return {
      projects,
    };
  },
};
</script>

ProjectComponent
<style></style>
