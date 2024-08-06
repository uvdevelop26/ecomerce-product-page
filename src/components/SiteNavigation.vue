<script setup>
import { ref } from "vue";

const props = defineProps({
  cartElements: {
    type: Array,
    required: true,
  },
  updateCart: {
    type: Function,
    required: true,
  },
});

const modal = ref(null);
const sidebar = ref(null);
const cart = ref(false);

const toggleMenu = () => {
  if (modal.value.classList.contains("hidden")) {
    modal.value.classList.remove("hidden");
    setTimeout(() => {
      sidebar.value.classList.remove("-translate-x-full");
      sidebar.value.classList.add("translate-x-0");
    }, 300);
  } else {
    sidebar.value.classList.remove("translate-x-0");
    sidebar.value.classList.add("-translate-x-full");
    setTimeout(() => {
      modal.value.classList.add("hidden");
    }, 300);
  }
};

const deleteProduct = (product) => {
  const updatedCart = props.cartElements.filter(
    (item) => item.product !== product
  );
  props.updateCart(updatedCart);
};

const toggleCart = () => {
  cart.value = !cart.value;
};
</script>

<template>
  <nav>
    <div class="container">
      <!-- head -->
      <div
        class="h-[4.2rem] pb-2 flex justify-between items-center md:h-28 lg:justify-normal lg:gap-8 lg:border-b">
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
          class="hidden fixed inset-0 bg-black bg-opacity-75 z-10 transition-opacity lg:flex lg:static lg:inset-auto lg:bg-opacity-100"
          ref="modal">
          <div
            class="h-screen w-[67vw] bg-white -translate-x-1/2 transition-transform lg:-translate-x-0 lg:h-auto lg:w-auto"
            ref="sidebar">
            <div class="container">
              <div class="pt-5 lg:hidden">
                <button
                  type="button"
                  aria-label="menu close"
                  @click="toggleMenu">
                  <img src="/images/icon-close.svg" alt="close" />
                </button>
              </div>
              <ul
                class="pt-11 flex flex-col gap-5 lg:flex-row lg:pt-0 lg:gap-7">
                <li>
                  <a
                    href="#"
                    class="font-bold text-lg relative hover:text-orange-new lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide lg:hover:text-dark-grayish-blue lg:after:content-[''] lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:w-[5.5rem] lg:after:h-1 lg:hover:after:bg-orange-new">Collections</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-bold text-lg relative hover:text-orange-new lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide lg:hover:text-dark-grayish-blue lg:after:content-[''] lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:w-9 lg:after:h-1 lg:hover:after:bg-orange-new">Men</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-bold text-lg relative hover:text-orange-new lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide lg:hover:text-dark-grayish-blue lg:after:content-[''] lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:w-16 lg:after:h-1 lg:hover:after:bg-orange-new">Women</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-bold text-lg relative hover:text-orange-new lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide lg:hover:text-dark-grayish-blue lg:after:content-[''] lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:w-14 lg:after:h-1 lg:hover:after:bg-orange-new">About</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-bold text-lg relative hover:text-orange-new lg:font-normal lg:text-base lg:text-dark-grayish-blue lg:tracking-wide lg:hover:text-dark-grayish-blue lg:after:content-[''] lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:w-16 lg:after:h-1 lg:hover:after:bg-orange-new">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- avatar and cart -->
        <div class="flex gap-6 relative lg:ml-auto lg:gap-12">
          <button
            type="button"
            aria-label="cart"
            class="group relative"
            @click="toggleCart">
            <span class="absolute inline-block leading-3 top-0 -right-2 rounded-xl w-4 h-3 bg-orange-new overflow-hidden text-xs font-bold text-white lg:top-3"  v-if="cartElements.length">{{ cartElements[0].counter }}</span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                class="group-hover:fill-black"
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <div
            class="h-6 w-6 rounded-full border-2 cursor-pointer hover:border-orange-new lg:h-13 lg:w-13">
            <img
              src="/images/image-avatar.png"
              alt="avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <transition
            name="fade"
            enter-active-class="transition-opacity duration-500"
            leave-active-class="transition-opacity duration-500">
            <div
              class="absolute -bottom-72 -right-4 w-[22.5rem] h-[15.8rem] bg-white z-20 rounded-md overflow-hidden shadow-lg lg:-right-[4.7rem] lg:-bottom-[17rem]"
              v-if="cart">
              <div class="h-[4.1rem] border-b pt-4 pl-6 font-bold">Cart</div>
              <div class="relative w-full h-full">
                <span
                  class="absolute top-[4.8rem] left-1/2 -translate-x-1/2 font-bold"
                  v-if="cartElements.length == 0">Your cart is empty.</span>
                <div class="w-full h-full p-6 flex flex-col gap-6" v-else>
                  <div class="flex gap-4">
                    <div class="w-13 h-13 rounded-md overflow-hidden">
                      <img
                        :src="cartElements[0].img"
                        alt="image product"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="text-dark-grayish-blue">
                      <p class="capitalize">{{ cartElements[0].product }}</p>
                      <div class="pt-1 tracking-wide">
                        {{`$${cartElements[0].currentPrice}.00 x ${cartElements[0].counter}`}}
                        <span class="font-bold text-black tracking-wider">
                          {{ `$${cartElements[0].total}.00`}}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="delete product"
                      @click="deleteProduct(cartElements[0].product)">
                      <img src="/images/icon-delete.svg" alt="delete" />
                    </button>
                  </div>
                  <div
                    class="h-14 w-full overflow-hidden rounded-lg bg-orange-new">
                    <button class="w-full h-full font-bold">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
