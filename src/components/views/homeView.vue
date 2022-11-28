<template>
<div>
  <hero-section class="pt-28 z-0" ref="home" />
  <about-section class="md:pt-10 z-0" ref="about" />
  <project-section class="px-10 mt-14 z-0" ref="project" />
  <contact-section class="px-10 mt-14 z-0" ref="contact" />

</div>
</template>

<script>
import AboutSection from "@/components/sections/aboutSection.vue";
import ContactSection from "@/components/sections/contactSection.vue";
import HeroSection from "@/components/sections/heroSection.vue";
import ProjectSection from "@/components/sections/projectSection.vue";
export default {
   components: {
    HeroSection,
    AboutSection,
    ProjectSection,
    ContactSection,
  }, 
};
</script>

<style></style>
