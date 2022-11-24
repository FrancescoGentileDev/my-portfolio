<template>
  <div class="h-24 flex items-center justify-between px-40 pt-3 bg-background border-b-2 border-opacity-5 border-grey">
    <div class="logo w-16">
   <a href="/"><img src="../../assets/logo.svg" class="w-full" alt="logo"></a> 
    </div>
    <nav>
    <ul class="flex gap-10 font text-2xl font-bold text-secondary text-tra">
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>
    </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .logo {
        filter: invert(56%) sepia(62%) saturate(6303%) hue-rotate(202deg) brightness(91%) contrast(90%);
    }
    ul {
        text-transform: uppercase;
    }
</style>