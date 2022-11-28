<template>
  <div class="h-screen hero-background" id="home">
  <socials-component class="hidden md:block absolute" data-aos='fade-right' data-aos-delay='1300'  data-aos-duration='1300' data-aos-once='true'/>
    <div
      class="md:w-6/12 px-10 h-full container mx-auto flex flex-col justify-center items-left relative"
    >
      <h3 data-aos='fade-left' data-aos-delay='300'  data-aos-duration='700'  data-aos-once='true' class="sm:text-3xl text-md  text-marrone2 font-semibold" >Hi my name is,</h3>
      <h1 data-aos='flip-right' data-aos-delay='800' data-aos-duration='1000'  data-aos-once='true'   class="sm:text-8xl text-6xl font-extrabold text-quaternary">Francesco Gentile</h1>
      <p  data-aos='fade-down' data-aos-delay='1200'  data-aos-duration='1300'  data-aos-once='true'  class="md:text-7xl text-4xl text-secondary font-extrabold mt-4 mb-7">
        Learning new things every day
      </p>
      <p data-aos='fade' data-aos-delay='1400'  data-aos-duration='1000'  data-aos-once='true' class="md:text-2xl font-semibold text-darkGrey">
        I'm a web developer, and a technology enthusiast.
      </p>
      <div data-aos='zoom-in' data-aos-delay='1700'  data-aos-duration='1000'  data-aos-once='true' class="w-fit px-5 py-2 font-semibold sm:text-2xl mt-8 ml-3 bg-marrone1 text-background hover:bg-marrone2">
      
      <a href="/#projects" >
        My Projects
      </a>
      </div>
      <div class="mouse-container bottom-5 w-full justify-center items-end absolute hidden md:flex" >
        <div class="mouse h-16 w-10 border-2 border-grey rounded-full select-none relative">
        <div class="dot w-3 h-3 bg-grey rounded-full mt-2 top-0 absolute left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socialsComponent from '../components/socialsComponent.vue';
export default {
  components: { socialsComponent },};
</script>

<style lang="scss" scoped>
.hero-background {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1044%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(10%2c 25%2c 47%2c 1)'%3e%3c/rect%3e%3cpath d='M1136.0380810436802 408.3614615016281L1143.3756825375522 513.2940515902416 1240.9706711322935 401.02386000775624z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M628.0813842236915 130.2627035282186L716.3767900266992 44.99682127721866 631.1109077756993-43.29858452578901 542.8155019726917 41.96729772521094z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M293.69334315117896 1.0390610244396257L307.1917762803155 157.03904333641427 420.6688430393608 80.49779534114148z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M550.9341973152879 335.2330820842505L619.7253684010434 445.5557869840455 674.8247683824056 346.15383813086646z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M828.7134838169848 319.5074586513772L849.4547843193063 171.92543705428628 701.8727627222154 151.18413655196474 681.1314622198938 298.7661581490557z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M238.20792205130329 396.43114704383254L211.9972476164856 315.76298583753385 131.3290864101869 341.97366027235154 157.5397608450046 422.64182147865023z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1236.692%2c296.474C1286.17%2c298.493%2c1339.658%2c286.094%2c1364.731%2c243.392C1390.036%2c200.294%2c1375.891%2c146.781%2c1349.509%2c104.333C1324.768%2c64.525%2c1283.515%2c39.47%2c1236.692%2c37.378C1185.596%2c35.095%2c1130.153%2c48.9%2c1104.95%2c93.407C1080%2c137.468%2c1098.001%2c191.151%2c1125.559%2c233.63C1150.384%2c271.895%2c1191.118%2c294.614%2c1236.692%2c296.474' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1364.328451571068 312.735616560839L1287.3637952169972 411.24588443584776 1385.874063092006 488.2105407899185 1462.8387194460768 389.70027291490976z' fill='rgba(17%2c 42%2c 79%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1044'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
}
.mouse-container {
  .mouse {
    .dot {
      animation: scrolling 1200ms cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
      @keyframes scrolling {
        from {
          top: 0;
          opacity: 1;
        }
        to {
          top:calc(100% - 30px);
          opacity: 0;
        }
      }
    }
  }
}
</style>
