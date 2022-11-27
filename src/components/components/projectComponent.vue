<template>
  <div class="md:columns-2 flex flex-wrap md:flex-nowrap gap-10"
  :class="{'flex-row-reverse' : reverse}"
  >
    <div class="proj-img relative max-w-2xl"  :data-aos='reverse? "fade-left": "fade-right" ' data-aos-delay='300' data-aos-duration='500'  data-aos-once='true' >
      <img
        :src="image"
        :alt="project.image"
        class="w-full select-none"
        draggable="false"
      />
      <a
        draggable="false"
        v-if="project.link"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-marrone1 text-background font-bold text-lg px-2 py-1 opacity-20 transition-all rounded-lg hover:opacity-100"
        :href="project.link"
        target="_blank"
        >OPEN LIVE DEMO</a
      >
    </div>

    <div class="proj-texts max-w-xl flex flex-col justify-center gap-6 " :class="{'md:items-end' : reverse}"  :data-aos='reverse? "fade-right": "fade-left" '   data-aos-once='true'  data-aos-duration='500' data-aos-delay='300'>
      <h5 class="text-4xl font-bold text-tertiary capitalize">{{ project.name }}</h5>
      <p class="font-semibold text-darkGrey text-xl" :class="{'md:text-right' : reverse}">
        {{ project.description }}
      </p>
      <button
        class="w-fit bg-marrone1 text-background font-bold text-lg px-2 py-1 hover:bg-marrone2"
      >
        STUDY CASE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    reverse: Boolean,
  },
  data() {
    return {
      image: new URL(
        `/src/assets/projects/${this.project.image}`,
        import.meta.url
      ).href,
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
