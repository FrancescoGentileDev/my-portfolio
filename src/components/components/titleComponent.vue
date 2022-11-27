<template>
<div>
 <div class="title" data-aos='zoom-in'>
      <h2
        class="text-center text-tertiary text-3xl md:text-5xl uppercase font-bold"
      >
        {{ title }}
      </h2>
      <div class="divider bg-marrone1"></div>
    </div>
    <p class="text-tertiary text-center text-lg md:text-xl">
        {{ subTitle }}
    </p>
</div>
</template>

<script>
export default {
    props: {
        title: String,
        subTitle: String,
    }
}
</script>

<style lang="scss" scoped>
.divider {
  width: 80px;
  height: 8px;
  margin: 2rem auto;
  border-radius: 40px;
}
</style>