<template>
  <!-- filter table | css -> card-container.css -->
  <div class="info-container">
    <div class="info-left">
      <div class="info-left-container">
        <div class="info-left-container-2">
          <p class="info-left-text-1">Item Detail</p>
          <p class="info-left-text-2">Type item for <b>Hours</b> item</p>
        </div>
      </div>
    </div>
    <div class="info-right">
      <button class="table-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="table-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <span class="table-button-text">Customize</span>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QTableFilter",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.info-container {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}

.info-left {
  margin-top: 10px;
  width: 100%;
}

.info-right {
  margin-top: 10px;
  width: 100%;
}

.info-left-container-2 {
  margin-top: 1rem;
}

.info-left-text-1 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
}

.info-left-text-2 {
  margin-top: 20px;
  line-height: 0.6em;
  color: #6b7280;
}

.table-button {
  display: inline-flex;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #dbeafe;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: bold;
  cursor: pointer;
}

.table-button-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.table-button-text {
  margin-top: 1px;
  margin-left: 5px;
}

@media (min-width: 1024px) {
  .info-left {
    width: 75%;
  }

  .info-right {
    width: 25%;
    text-align: right;
  }
}

@media (min-width: 768px) {
  .info-left-container {
    display: flex;
    align-items: flex-start;
  }

  .info-left-container-2 {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0;
  }
}
</style>
