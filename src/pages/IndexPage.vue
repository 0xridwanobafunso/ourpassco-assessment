<template>
  <q-page>
    <div class="main-section">
      <q-breadcrumb></q-breadcrumb>
      <q-card-container></q-card-container>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import QBreadcrumb from "../components/QBreadcrumb.vue";
import QCardContainer from "../components/QCardContainer.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    QBreadcrumb,
    QCardContainer,
  },

  setup() {},
});
</script>

<style scoped>
.main-section {
  /* padding: 30px 25px; */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .main-section {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}
</style>
