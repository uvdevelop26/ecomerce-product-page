<script setup>
import { computed } from "vue";

const props = defineProps({
  show: Object,
  duration: {
    type: Number,
    default: 3000,
  },
});

const styleFlash = computed(() => {
  return props.show.style == "success" ? "bg-green-500" : "bg-red-500";
});
</script>

<template>
  <transition name="slide">
    <div
      class="absolute flex items-center justify-center top-8 left-12 md:left-72 lg:left-[40%] h-16 w-72 lg:w-96 rounded-md z-50"
      :class="styleFlash"
      v-if="show.state">
      <span class="font-bold text-white">{{ show.message }}</span>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from {
  transform: translateY(-200%);
}
.slide-enter-to {
  transform: translateY(0);
}
.slide-leave-from {
  transform: translateY(0);
}
.slide-leave-to {
  transform: translateY(-200%);
}
</style>
