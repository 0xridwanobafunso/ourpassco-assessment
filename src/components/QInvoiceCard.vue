<template>
  <div class="image-card-container">
    <img class="image-card" src="/images/bg_invoice_card.PNG" alt="" />
    <div class="image-top-left">
      <p style="font-weight: bold">Invoice Number</p>
      <p>INV-2022-010</p>
      <p><span style="font-weight: bold">Issued Date</span>: 11 Jan 2020</p>
      <p><span style="font-weight: bold">Due Date</span>: 11 Jan 2020</p>
    </div>
    <div class="image-top-right">
      <p style="font-weight: bold">Billed to</p>
      <p>Zoky Grizzly</p>
      <p>Moonlight Agency LTD</p>
      <p>New York, USA</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QInvoiceCard",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.image-card-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: none;
}

.image-card {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 1.7rem;
}

.image-top-left {
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: 30px;
  transform: translateY(-50%);
  color: #fff;
}

.image-top-right {
  position: absolute;
  right: 0;
  top: 50%;
  margin-right: 30px;
  transform: translateY(-50%);
  color: #fff;
}

@media (min-width: 1024px) {
  .image-card-container {
    display: block;
  }
}
</style>
