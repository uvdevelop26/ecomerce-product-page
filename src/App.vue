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
  console.log(data.value.images)
});


</script>
<template>
  <div id="app">
    <!-- nav -->
    <SiteNavigation />
    <main>
      <!-- hero section -->
      <div>
        <ProductViewer v-if="data && data.images" :images="data.images" />
      </div>
      <div>
        <section>
          
          

        </section>
      </div>
    </main>
  </div>
</template>

<style>
/* Puedes agregar tus estilos aquí */
</style>
