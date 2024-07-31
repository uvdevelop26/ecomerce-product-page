<script setup>
import SiteNavigation from "./components/SiteNavigation.vue";
import ProductViewer from "./components/ProductViewer.vue";
import { ref, onMounted } from "vue";

const data = ref(null);

const getData = async () => {
  try {
    const response = await fetch("src/data/data.json");

    if (!response.ok) {
      throw new Error("data not available...");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(async () => {
  data.value = await getData();
  console.log(data.value.images);
});
</script>
<template>
  <div id="app">
    <!-- nav -->
    <SiteNavigation />
    <main class="lg:flex lg:gap-14 lg:mb-20">
      <!-- hero section -->
      <div class="lg:pt-20 lg:flex-1 bg-blue-300">
        <ProductViewer v-if="data && data.images" :images="data.images" />
      </div>
      <!-- product info -->
      <div class="lg:pt-20 lg:flex-1 bg-blue-100">
        <section class="px-[1.5rem] mb-16 max-w-xl mx-auto md:max-w-2xl">
          <p
            class="pt-6 uppercase text-sm font-bold text-dark-grayish-blue tracking-wider">
            Sneaker Company
          </p>
          <h1 class="pt-2 font-bold text-2xxl leading-8 tracking-tight">
            Fall Limited Edition Sneakers
          </h1>
          <p class="pt-4 leading-extra-loose tracking-tight text-dark-grayish-blue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div class="pt-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <span class="text-2xxl font-bold">$125.00</span>
              <span class="inline-block pt-[0.2rem] mt-2 text-center w-[3.2rem] h-7 rounded-md bg-black text-white font-bold">50%</span>
            </div>
            <div class="pt-1 text-dark-grayish-blue font-bold tracking-wide">$250.00</div>
          </div>
          <div class="flex flex-col gap-5 pt-5">
            <div class="h-14 flex items-center  bg-light-grayish-blue overflow-hidden">
              <button type="button" aria-label="minus" class="w-full h-full cursor-pointer relative">
                <img src="/images/icon-minus.svg" alt="minus" class="absolute left-6 top-7" />
              </button>
              <div class="inline-block w-full h-full relative">
                <span class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-black">0</span>
              </div>
              <button type="button" aria-label="plus" class="w-full h-full cursor-pointer relative">
                <img src="/images/icon-plus.svg" alt="plus" class="absolute right-6 top-6" />
              </button>
            </div>
            <div class="h-14 bg-orange-new rounded-md overflow-hidden">
              <button type="button" aria-label="cart" class="flex w-full h-full items-center justify-center gap-4 cursor-pointer">
                <img src="/images/icon-cart.svg" alt="cart" class="w-4" />
                <span class="font-bold">Add to cart</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
