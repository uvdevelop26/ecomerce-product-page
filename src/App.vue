<script setup>
import SiteNavigation from "./components/SiteNavigation.vue";
import ProductViewer from "./components/ProductViewer.vue";
import FlashMessage from "./components/FlashMessage.vue";
import { ref, onMounted } from "vue";

const data = ref(null);
const counter = ref(0);

const cartElements = ref([]);
const showFlash = ref({ state: false, message: "", style: "" });
const flashDuration = ref(3000);

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

const calculeDiscount = (price, discount) => {
  return (price * discount) / 100;
};

const handeProductcounter = (action) => {
  if (action === "plus") {
    counter.value += 1;
  } else if (action === "minus") {
    counter.value = Math.max(0, counter.value - 1);
  }
};

const addToCart = (data) => {
  if (counter.value > 0) {
    const existingProduct = cartElements.value.find(
      (item) => item.product === data.product
    );

    if (existingProduct) {
      showFlash.value = {
        state: true,
        message: "You've added this product",
        style: "error",
      };

      setTimeout(() => {
        showFlash.value.state = false;
      }, flashDuration.value);

      return;
    }

    const product = data.product;
    const currentPrice = calculeDiscount(data.price, data.discount);
    const total = currentPrice * counter.value;
    const img = data.images.jpg[0];
    const counterSend = counter.value;

    const info = {
      product: product,
      currentPrice: currentPrice,
      total: total,
      img: img,
      counter: counterSend,
    };

    cartElements.value.push(info);

    showFlash.value = {
      state: true,
      message: "Added to Cart",
      style: "success",
    };

    setTimeout(() => {
      showFlash.value.state = false;
    }, flashDuration.value);

    counter.value = 0;
  } else {
    showFlash.value = {
      state: true,
      message: "Add the amount of product",
      style: "error",
    };

    setTimeout(() => {
      showFlash.value.state = false;
    }, flashDuration.value);
  }
};

const updateCart = (updatedCart) => {
  cartElements.value = updatedCart;
};

onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <div id="app" class="relative">
    <!-- Message flash -->
    <FlashMessage :show="showFlash" :duration="flashDuration" />
    <!-- nav -->
    <SiteNavigation :cartElements="cartElements" :updateCart="updateCart" />
    <!-- main -->
    <main class="lg:flex lg:gap-14 lg:mb-20">
      <!-- hero section -->
      <div class="lg:pt-20 lg:flex-1">
        <ProductViewer v-if="data && data.images" :images="data.images" />
      </div>
      <!-- product info -->
      <div class="lg:pt-20 lg:flex-1">
        <section
          v-if="data"
          class="px-[1.5rem] mb-16 max-w-xl mx-auto md:max-w-2xl lg:pt-12 lg:max-w-xl lg:px-[2.1rem] lg:mx-0">
          <p
            class="pt-6 uppercase text-sm font-bold text-dark-grayish-blue tracking-wider lg:tracking-widest">
            {{ data.company }}
          </p>
          <h1
            class="pt-2 font-bold text-2xxl leading-8 tracking-tight capitalize lg:pt-4 lg:tracking-tight lg:text-5xl">
            {{ data.product }}
          </h1>
          <p
            class="pt-4 leading-extra-loose tracking-tight text-dark-grayish-blue lg:pt-9 lg:tracking-normal lg:max-w-md">
            {{ data.description }}
          </p>
          <div
            class="pt-4 flex justify-between items-center lg:pt-5 lg:flex-col lg:items-start">
            <div class="flex items-center gap-4 lg:gap-5">
              <span class="text-2xxl font-bold">
                ${{ `${calculeDiscount(data.price, data.discount)}.00` }}
              </span>
              <span
                class="inline-block pt-[0.2rem] mt-2 text-center w-[3.2rem] h-7 rounded-md bg-black text-white font-bold">
                {{ data.discount }}%
              </span>
            </div>
            <div
              class="pt-1 text-dark-grayish-blue font-bold tracking-wide line-through">
              ${{ data.price }}
            </div>
          </div>
          <div class="flex flex-col gap-5 pt-5 lg:flex-row lg:pt-8 lg:gap-4">
            <div
              class="h-14 flex items-center rounded-md bg-light-grayish-blue overflow-hidden lg:w-40">
              <button
                type="button"
                aria-label="minus"
                class="w-full h-full cursor-pointer hover:bg-gray-100 relative"
                @click="handeProductcounter('minus')">
                <img
                  src="/images/icon-minus.svg"
                  alt="minus"
                  class="absolute left-6 top-7"
                />
              </button>
              <div class="inline-block w-full h-full relative">
                <span
                  class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-black">
                  {{ counter }}
                </span>
              </div>
              <button
                type="button"
                aria-label="plus"
                class="w-full h-full cursor-pointer hover:bg-gray-100 relative"
                @click="handeProductcounter('plus')">
                <img
                  src="/images/icon-plus.svg"
                  alt="plus"
                  class="absolute right-6 top-6"
                />
              </button>
            </div>
            <div
              class="h-14 bg-orange-new rounded-md overflow-hidden shadow-lg lg:w-[16.8rem] hover:bg-orange-pale-new">
              <button
                type="button"
                aria-label="cart"
                class="flex w-full h-full items-center justify-center gap-4 cursor-pointer"
                @click="addToCart(data)">
                <img src="/images/icon-cart.svg" alt="cart" class="w-4" />
                <span class="font-bold">Añadir al carrito</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
