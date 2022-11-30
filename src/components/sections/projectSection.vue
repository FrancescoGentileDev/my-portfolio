<template>
  <div id="projects" class="container mx-auto">
    <title-component
      :title="$t('projects.title')"
      :subTitle="$t('projects.subtitle')"
    />
    <div class="projects-container flex flex-col mt-16 gap-12">
      <project-component
        v-for="(project, index) in projects"
        :index="index"
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
