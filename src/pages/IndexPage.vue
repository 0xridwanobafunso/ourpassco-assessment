<template>
  <q-page>
    <div class="main-section">
      <q-breadcrumb></q-breadcrumb>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import QBreadcrumb from "../components/QBreadcrumb.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    QBreadcrumb,
  },

  setup() {},
});
</script>

<style scoped>
.main-section {
  padding: 30px 25px;
}
</style>
