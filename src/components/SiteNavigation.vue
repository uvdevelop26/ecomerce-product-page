<script setup>
import { ref } from "vue";

const modal = ref(null);
const sidebar = ref(null);

const toggleMenu = () => {
  if (modal.value.classList.contains("hidden")) {
    modal.value.classList.remove("hidden");
    setTimeout(() => {
      sidebar.value.classList.remove("-translate-x-full");
      sidebar.value.classList.add("translate-x-0");
    }, 400);
  } else {
    sidebar.value.classList.remove("translate-x-0");
    sidebar.value.classList.add("-translate-x-full");
    setTimeout(() => {
      modal.value.classList.add("hidden");
    }, 400);
  }
};
</script>

<template>
  <nav>
    <div class="container">
      <!-- head -->
      <div class="h-[4.2rem] pb-2 flex justify-between items-center md:h-28 lg:justify-normal lg:gap-8">
        <div class="flex gap-4">
          <button
            type="button"
            aria-label="menu open"
            class="lg:hidden"
            @click="toggleMenu">
            <img src="/images/icon-menu.svg" alt="menu open" class="h-4" />
          </button>
          <img src="/images/logo.svg" alt="logo" class="h-5" />
        </div>
        <!-- mobile  -->
        <div
          class="hidden fixed inset-0 bg-black bg-opacity-75 z-10 transition-opacity lg:flex lg:static lg:inset-auto  lg:bg-opacity-100"
          ref="modal">
          <div
            class="h-screen w-[67vw] bg-white -translate-x-1/2 transition-transform lg:-translate-x-0 lg:h-auto lg:w-auto "
            ref="sidebar">
            <div class="container">
              <div class="pt-5 lg:hidden">
                <button type="button" aria-label="menu close">
                  <img
                    src="/images/icon-close.svg"
                    alt="close"
                    @click="toggleMenu"
                  />
                </button>
              </div>
              <ul class="pt-11 flex flex-col gap-5 lg:flex-row lg:pt-0 lg:gap-7">
                <li>
                  <a href="#" class="font-bold text-lg lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide">Collections</a>
                </li>
                <li>
                  <a href="#" class="font-bold text-lg lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide">Men</a>
                </li>
                <li>
                  <a href="#" class="font-bold text-lg lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide">Women</a>
                </li>
                <li>
                  <a href="#" class="font-bold text-lg lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide">About</a>
                </li>
                <li>
                  <a href="#" class="font-bold text-lg lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- avatar and chart -->
        <div class="flex gap-6 lg:ml-auto lg:gap-12">
          <button type="button" aria-label="chart">
            <img src="/images/icon-cart.svg" alt="chart" />
          </button>
          <div class="h-6 w-6 rounded-full lg:h-13 lg:w-13">
            <img
              src="/images/image-avatar.png"
              alt="avatar"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
