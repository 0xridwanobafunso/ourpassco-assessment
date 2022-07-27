<template>
  <div class="table-container-1">
    <div class="table-container-2">
      <table class="table">
        <thead>
          <tr class="table-head-row">
            <th class="table-head-item" colspan="2">Item</th>
            <th class="table-head-item">Hours</th>
            <th class="table-head-item">Rate/hr</th>
            <th class="table-head-item">Tax</th>
            <th class="table-head-item">Line Total</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-body-row">
            <td class="table-body-item">[Form]</td>
            <td></td>
            <td class="table-body-item">[Form]</td>
            <td class="table-body-item">[Form]</td>
            <td class="table-body-item">[Form]</td>
            <td class="table-body-item" style="display: flex">
              [Form]
              <span class="table-plus-icon">+</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QTable",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
table {
  border: 1px solid #fff;
  border-collapse: collapse;
}

.table-container-1 {
  margin-top: 20px;
  overflow-x: auto;
  width: 100%;
  /* border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #e5e7eb; */
}

.table-container-2 {
  overflow-x: auto;
  width: 100%;
}

.table {
  width: 100%;
}

.table-head-row {
  background-color: #fff;
  color: #6b7280;
  font-size: 0.8rem;
  line-height: 1rem;
  letter-spacing: 0.025em;
  text-align: left;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-collapse: collapse;
}

.table-head-item {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: normal;
}

.table-body {
  background-color: #fff;
}

.table-body-row {
  color: #374151;
}

.table-body-item {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-collapse: collapse;
}

.table-plus-icon {
  background-color: #1d4ed8;
  color: #fff;
  margin-top: -1px;
  margin-left: 10px;
  padding: 0.1rem 0.4rem;
  border-radius: 9999px;
  font-weight: bold;
}
</style>
