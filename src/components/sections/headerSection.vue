<template>
  <div
    class="h-24 flex items-center justify-between px-5 lg:px-40 pt-3 bg-background bg-opacity-30 border-b-2 border-opacity-10 border-grey backdrop-blur-md transition-all duration-200 top-0"
    :class="{ '-top-28': hide }"
    ref="header"
  >
    <div class="logo w-16">
      <a draggable="false" href="/" class="w-full"
        ><img
          draggable="false"
          src="../../assets/logo.svg"
          class="w-full"
          alt="logo"
      /></a>
    </div>
    <nav class="relative">
      <ul
        class="gap-10 font text-2xl font-bold text-secondary uppercase hidden md:flex"
      >
        <li draggable="false">
          <a draggable="false" href="/#home">{{ $t("header.home") }}</a>
        </li>
        <li draggable="false">
          <a draggable="false" href="/#about">{{ $t("header.about") }}</a>
        </li>
        <li draggable="false">
          <a draggable="false" href="/#projects">{{ $t("header.projects") }}</a>
        </li>
        <li draggable="false">
          <a draggable="false" href="/#contact">{{ $t("header.contact") }}</a>
        </li>
        <li draggable="false">
          <a
            class="bg-marrone1 text-background font-semibold px-1 py-2 hover:bg-marrone2 text-xl"
            draggable="false"
            target="_blank"
           href="/curriculumFrancescoGentile.pdf"
            >{{ $t("header.cv") }}</a
          >
        </li>
      </ul>

      <div class="menu cross menu--1 md:hidden">
        <label>
          <input type="checkbox" @change="toggleMenu" />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path class="line--2" d="M0 50h70" />
            <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>
      <div
        class="hiddenNav fixed w-3/5 h-screen hrefp-24 transition-all duration-300 ease-out top-24 delay-100 md:hidden bg-background bg-opacity-90 backdrop-blur-lg"
        ref="hiddenNav"
        :class="{ 'right-0': navbar, '-right-96': !navbar, active: navbar }"
      >
        <ul
          class="gap-10 text-2xl font-bold text-secondary uppercase flex flex-col items-end p-6"
        >
          <li draggable="false">
            <a draggable="false" href="/#home">{{ $t("header.home") }}</a>
          </li>
          <li draggable="false">
            <a draggable="false" href="/#about">{{ $t("header.about") }}</a>
          </li>
          <li draggable="false">
            <a draggable="false" href="/#projects">{{
              $t("header.projects")
            }}</a>
          </li>
          <li draggable="false">
            <a draggable="false" href="/#contact">{{ $t("header.contact") }}</a>
          </li>
          <li draggable="false">
            <a
              class="bg-marrone1 text-background font-semibold px-1 py-2 hover:bg-marrone2 text-xl"
              draggable="false"
              target="_blank"
              href="/curriculumFrancescoGentile.pdf"
              >{{ $t("header.cv") }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: false,
      right: "-15rem",
      hide: false,
      hideValue: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;

      if (!this.hide && scroll < this.hideValue) {
        this.hide = false;
        this.hideValue = scroll;
      } else if (scroll >= 900 && scroll > this.hideValue) {
        this.hide = true;
        this.hideValue = scroll;
      } else {
        this.hide = false;
      }
    });
  },
  methods: {
    toggleMenu() {
      this.navbar = !this.navbar;
      document.getElementsByTagName("html")[0].style.overflowY = this.navbar
        ? "hidden"
        : "visible";
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  filter: invert(56%) sepia(62%) saturate(6303%) hue-rotate(202deg)
    brightness(91%) contrast(90%);
}

label {
  display: block;
  cursor: pointer;
  position: absolute;
  width: 90px;
  /* height: 24px; */
  /* bottom: -38%; */
  top: -4.8rem;
  /* left: -69px; */
  /* max-width: 100px; */
  /* max-height: 100px; */
}

@media (min-aspect-ratio: 1/1) {
  label {
    width: 25vh;
    height: 25vh;
  }
}

.menu--1 label,
.menu--2 label {
  bottom: 0;
}

.menu--1 label,
.menu--3 label {
  right: 0;
}

path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

circle {
  fill: #fff3;
  opacity: 0;
}

label:hover circle {
  opacity: 1;
}

.cross input:checked + svg {
  .line--1,
  .line--3 {
    --length: 22.627416998;
  }
  .line--2 {
    --length: 0;
  }
}

.back input:checked + svg {
  .line--1,
  .line--3 {
    --length: 8.602325267;
  }
}

.menu--1 {
  background-color: #3f77e9;
  .line--1,
  .line--3 {
    --total-length: 126.64183044433594;
  }
  .line--2 {
    --total-length: 70;
  }
  input:checked + svg {
    .line--1,
    .line--3 {
      --offset: -94.1149185097;
    }
    .line--2 {
      --offset: -50;
    }
  }
}
</style>
