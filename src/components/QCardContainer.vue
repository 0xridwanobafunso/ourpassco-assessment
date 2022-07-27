<template>
  <div class="card-container">
    <q-company-info></q-company-info>
    <q-invoice-card></q-invoice-card>
    <q-table-filter></q-table-filter>
    <q-table></q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QCompanyInfo from "./QCompanyInfo.vue";
import QInvoiceCard from "./QInvoiceCard.vue";
import QTableFilter from "./QTableFilter.vue";
import QTable from "./QTable.vue";

export default defineComponent({
  name: "QCardContainer",
  components: {
    QCompanyInfo,
    QInvoiceCard,
    QTableFilter,
    QTable,
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
  padding: 35px;
  border-width: 1px;
  border-radius: 1.5rem;
}
</style>
