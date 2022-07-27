<template>
  <div class="card-container">
    <q-company-info></q-company-info>
    <q-invoice-card></q-invoice-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QCompanyInfo from "./QCompanyInfo.vue";
import QInvoiceCard from "./QInvoiceCard.vue";

export default defineComponent({
  name: "QCardContainer",
  components: {
    QCompanyInfo,
    QInvoiceCard,
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
