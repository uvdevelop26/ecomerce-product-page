<script setup></script>

<template>
  <nav>
    <div class="container">
      <div class="h-[4.2rem] pb-2 flex justify-between items-center">
        <div class="flex gap-4">
          <button type="button" aria-label="menu">
            <img src="/images/icon-menu.svg" alt="menu" class="h-4" />
          </button>
          <img src="/images/logo.svg" alt="logo" class="h-5" />
        </div>
        <div class="flex gap-6">
          <button type="button" aria-label="chart">
            <img src="/images/icon-cart.svg" alt="chart" />
          </button>
          <div class="h-6 w-6 rounded-full">
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
