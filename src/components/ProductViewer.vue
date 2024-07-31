<script setup>
import { ref } from "vue";

const props = defineProps({
  images: Object,
});

const carouselRef = ref(null);

const next = () => {
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.scrollBy({
      left: carousel.clientWidth,
      behavior: "smooth",
    });
  }
};

const previous = () => {
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.scrollBy({
      left: -carousel.clientWidth,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="overflow-hidden relative lg:pt-3 lg:pr-8 bg-red-200">
    <!-- image viewer -->
    <div
      class="hidden lg:block lg:w-[28rem] lg:h-[27.7rem] lg:rounded-xl lg:ml-auto lg:bg-red-400">
      <img src="" alt="">
    </div>
    <!-- carroucel movile -->
    <ul
      ref="carouselRef"
      class="carousel h-[18.7rem] w-full flex overflow-x-auto snap-x snap-mandatory sm:h-96 lg:h-auto lg:mt-8 lg:flex-nowrap lg:overflow-x-visible lg:snap-none lg:w-[28rem] lg:ml-auto lg:justify-between">
      <li
        v-for="jpg in images.jpg"
        :key="jpg"
        class="carousel-item w-full h-full flex-shrink-0 snap-center lg:w-[5.6rem] lg:border-2 lg:border-orange-new lg:rounded-lg"
      >
        <img
          :src="jpg"
          alt=""
          class="w-full h-full object-cover md:object-contain"
        />
      </li>
    </ul>
    <button
      type="button"
      aria-label="previous"
      class="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white left-4 flex items-center justify-center"
      @click="previous"
    >
      <img src="/images/icon-previous.svg" alt="previous" class="w-2" />
    </button>
    <button
      type="button"
      aria-label="next"
      class="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white right-4 flex items-center justify-center"
      @click="next"
    >
      <img src="/images/icon-next.svg" alt="next" class="w-2" />
    </button>
  </div>
</template>

<style scoped>
.carousel-container {
  overflow: hidden;
  position: relative;
}

.carousel {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.carousel-item {
  scroll-snap-align: center;
}
</style>
