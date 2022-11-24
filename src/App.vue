

<template>
<div>
<header-section class="fixed w-full"/>
<hero-section />
</div>
</template>


<script>
import headerSection from './components/sections/headerSection.vue'
import HeroSection from './components/sections/heroSection.vue'
export default {
  components: { headerSection, HeroSection },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
body {
font-family: 'Source Sans Pro', sans-serif !important;
background-color: #0A192F;
}
</style>
