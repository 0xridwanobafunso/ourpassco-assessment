<template>
  <div class="card-container">
    <q-company-info></q-company-info>
    <q-invoice-card></q-invoice-card>
    <q-table-filter></q-table-filter>
    <q-table></q-table>
    <q-checkout></q-checkout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QCompanyInfo from "./QCompanyInfo.vue";
import QInvoiceCard from "./QInvoiceCard.vue";
import QTableFilter from "./QTableFilter.vue";
import QTable from "./QTable.vue";
import QCheckout from "./QCheckout.vue";

export default defineComponent({
  name: "QCardContainer",
  components: {
    QCompanyInfo,
    QInvoiceCard,
    QTableFilter,
    QTable,
    QCheckout,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.card-container {
  background-color: #fff;
  margin-top: 20px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-width: 1px;
  border-radius: 1.5rem;
}

@media (min-width: 1024px) {
  .card-container {
    padding: 2.5rem;
  }
}
</style>
