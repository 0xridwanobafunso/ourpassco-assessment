<template>
  <q-layout class="app">
    <q-page-container>
      <q-navigation></q-navigation>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import QNavigation from "../components/QNavigation.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    QNavigation,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.app {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background-color: #f3f4f6;
}
</style>
