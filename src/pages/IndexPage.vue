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
  padding: 30px 25px;
}
</style>
