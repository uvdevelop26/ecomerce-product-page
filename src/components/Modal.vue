<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  open: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-x-auto">
    <div class="w-full h-full flex justify-center pt-20">
      <div class="w-full max-w-[34.2rem] h-[45.7rem]">
        <div class="text-right pt-2">
          <button type="button" @click="$emit('close')">
            <svg
              width="18"
              height="38"
              xmlns="http://www.w3.org/2000/svg"
              style="fill: #ffa500">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
