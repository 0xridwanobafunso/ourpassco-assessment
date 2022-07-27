<template>
  <!-- breadcrumb | css -> breadcrumb.css  -->
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <span class="breadcrumb-link">
      <a>Invoices</a>
    </span>
    <span class="seperator">/</span>
    <span class="breadcrumb-link-active">edit invoice (INV-2022-010)</span>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QBreadcrumb",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.breadcrumb {
  display: flex;
}

.breadcrumb-link a {
  text-decoration: none;
  color: #1d4ed8;
  font-weight: bold;
}

.breadcrumb-link-active {
  color: #374151;
}

.seperator {
  margin-left: 5px;
  margin-right: 5px;
  color: #374151;
}
</style>
