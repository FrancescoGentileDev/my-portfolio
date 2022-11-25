<template>
  <div id="about" class="h-screen container mx-auto">
    <div class="title">
      <h2 class="text-center text-tertiary text-5xl uppercase font-bold">
        About me
      </h2>
      <div class="divider bg-marrone1"></div>
    </div>
    <p class="text-tertiary text-center text-xl">
      Here you will find more information about me, and my current skills in
      programming and technology
    </p>
    <div
      class="abouts-container flex flex-col mt-16 gap-20"
    >
      <div class="knowme flex max-h-80 justify-center items-center gap-9">
        <div class="flex flex-col h-full w-96 text-center">
          <h4 class="uppercase font-bold text-3xl text-secondary text-center">
            Get know me
          </h4>
          <p class="text-tertiary text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            alias ipsum sit laboriosam modi distinctio animi, facilis,
            cupiditate, sapiente omnis eveniet. Repudiandae ratione, natus
            laborum aliquid sunt rem consectetur mollitia?
          </p>
        </div>
        <div class="image flex max-w-xs">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHsIWb7TfGL5A/profile-displayphoto-shrink_800_800/0/1655475496666?e=1674691200&v=beta&t=-cFDMmmYj0L5IvwLnFfEEEW7lKRgc6itz5-ju0-dis4"
            alt="my foto"
            class="shadow-xl rounded-full ring-8 ring-secondary"
          />
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.divider {
  width: 80px;
  height: 8px;
  margin: 2rem auto;
  border-radius: 40px;
}
</style>
