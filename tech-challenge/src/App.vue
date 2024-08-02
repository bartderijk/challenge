<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="header">
    <h1 class="text-3xl font-bold underline !text-red-500">
      Hello world!
    </h1>
  </div>
</template>

<style>  
#header {
  color: hotpink;
  text-align: center;
  margin: 29px auto;
}
</style>
