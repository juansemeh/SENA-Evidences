<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CodeRunner from './components/CodeRunner.vue'

const selectedFile = ref('Ejercicios principales/Objetos/objects.js')

function onSelectFile(file) {
  selectedFile.value = file
}
</script>

<template>
  <Navbar @selectFile="onSelectFile" />
  <div class="pt-16">
    <CodeRunner :selectedFile="selectedFile" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>