<script setup>
import { ref, computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
import Modal from "./Modal.vue";

const props = defineProps({
  images: Object,
});

const carouselRef = ref(null);
const selectedImage = ref(props.images.jpg[0]);
const openModal = ref(false);

const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const imageList = computed(() => {
  return isLargeScreen.value ? props.images.thumbnail : props.images.jpg;
});

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

const selectImage = (index) => {
  selectedImage.value = props.images.jpg[index];
};

const styleThumbnail = (index) => {
  const productItem = index + 1;
  if (selectedImage.value.includes(`product-${productItem}`)) {
    return `lg:border lg:border-orange-new lg:before:absolute lg:before:content-[''] lg:before:top-0 lg:before:bottom-0 lg:before:right-0 lg:before:left-0 lg:before:bg-white lg:before:opacity-75`;
  }
};
</script>
<template>
  <div class="overflow-hidden relative lg:pt-3 lg:pr-8">
    <!-- image viewer -->
    <div
      class="hidden overflow-hidden lg:block lg:w-[28rem] lg:h-[27.7rem] lg:rounded-xl lg:ml-auto">
      <button
        type="button"
        aria-label="show on modal"
        class="w-full h-full"
        @click="openModal = true">
        <img
          :src="selectedImage"
          alt="Selected Image"
          class="w-full h-full object-cover md:object-contain"
        />
      </button>
    </div>
    <ul
      ref="carouselRef"
      class="carousel h-[18.7rem] w-full flex overflow-x-auto snap-x snap-mandatory sm:h-96 lg:h-auto lg:mt-8 lg:flex-nowrap lg:overflow-x-visible lg:snap-none lg:w-[28rem] lg:ml-auto lg:justify-between">
      <li
        v-for="(image, index) in imageList"
        :key="image"
        class="carousel-item relative w-full h-full flex-shrink-0 snap-center lg:w-[5.6rem] lg:h-[5.8rem] lg:rounded-lg lg:overflow-hidden"
        :class="styleThumbnail(index)">
        <button
          type="button"
          aria-label="show big"
          class="w-full h-full p-0 m-0 cursor-default lg:cursor-pointer"
          @click="selectImage(index)">
          <img
            :src="image"
            alt="product image"
            class="w-full h-full object-cover md:object-contain lg:object-cover"
          />
        </button>
      </li>
    </ul>
    <button
      type="button"
      aria-label="previous"
      class="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white left-4 flex items-center justify-center shadow-md lg:hidden"
      @click="previous">
      <img src="/images/icon-previous.svg" alt="previous" class="w-2" />
    </button>
    <button
      type="button"
      aria-label="next"
      class="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white right-4 flex items-center justify-center shadow-md lg:hidden"
      @click="next">
      <img src="/images/icon-next.svg" alt="next" class="w-2" />
    </button>
  </div>

  <!-- modal -->
  <Modal :open="openModal" @close="openModal = false">
    <template #default>
      <div class="">
        <div class="h-[34.4rem] rounded-md overflow-hidden">
          <img
            :src="selectedImage"
            alt="Selected Image"
            class="w-full h-full object-cover"
          />
        </div>
        <ul
          ref="carouselRef"
          class="carousel h-[18.7rem] w-full flex overflow-x-auto snap-x snap-mandatory sm:h-96 lg:h-auto mt-10 justify-center gap-7">
          <li
            v-for="(image, index) in imageList"
            :key="image"
            class="carousel-item relative flex-shrink-0 snap-center w-[5.6rem] h-[5.8rem] rounded-lg overflow-hidden"
            :class="styleThumbnail(index)">
            <button
              type="button"
              aria-label="show big"
              class="w-full h-full p-0 m-0"
              @click="selectImage(index)">
              <img :src="image" alt="" class="w-full h-full object-cover" />
            </button>
          </li>
        </ul>
      </div>
    </template>
  </Modal>
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
