<script setup>
import { catsStore } from "../stores/cats"
const store = catsStore();
store.getCatsData(store);
</script>

<template>
  <h4>Facts about cats</h4>
  <ol>
    <li v-for="cat in store.catsList" style="box-shadow: 0 0 10px #e5e5e5; border: 1px solid #e5e5e5; padding: 20px; margin: 10px 0; background: #f7f7f7">
      {{ cat.text }}
    </li>
  </ol>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
