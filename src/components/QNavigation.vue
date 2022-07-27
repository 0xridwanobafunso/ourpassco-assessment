<template>
  <!-- navigation | css -> nav.css -->
  <nav class="bg">
    <div class="desktop-container">
      <div class="desktop-container-1">
        <div class="desktop-container-2">
          <!-- mobile menu button-->
          <span
            class="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="is_visible = !is_visible"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              version="1.1"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="humburger"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                    fill="#838383"
                    data-original="#000000"
                  />
                  <path
                    d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                    fill="#838383"
                    data-original="#000000"
                  />
                  <path
                    d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"
                    fill="#838383"
                    data-original="#000000"
                  />
                  <path
                    d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                    fill="#838383"
                    data-original="#000000"
                  />
                </g>
              </g>
            </svg>
          </span>
        </div>
        <div class="desktop-container-3">
          <div class="desktop-container-4">
            <span class="logo"> Paypay. </span>
          </div>
          <div class="desktop-container-5">
            <div class="desktop-container-6">
              <a href="#" class="desktop-nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="desktop-nav-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <span class="desktop-nav-link-text">Dashboard</span>
              </a>
              <a href="#" class="desktop-nav-link-active" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="desktop-nav-link-icon desktop-nav-link-icon-active"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <span class="desktop-nav-link-text">Invoices</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="desktop-nav-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span class="desktop-nav-link-text">Wallet</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="desktop-nav-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="desktop-nav-link-text">Activity</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="desktop-nav-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="desktop-nav-link-text">Help</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile menu show/hide based on menu state. -->
    <div class="mobile-container" v-if="is_visible">
      <div class="mobile-container-1">
        <a href="#" class="mobile-nav-link">Dashboard</a>
        <a href="#" class="mobile-nav-link-active" aria-current="page"
          >Invoices</a
        >
        <a href="#" class="mobile-nav-link">Wallet</a>
        <a href="#" class="mobile-nav-link">Activity</a>
        <a href="#" class="mobile-nav-link">Help</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QNavigation",
  components: {},
  setup() {
    // reactive state
    let is_visible = ref(false);

    return {
      is_visible,
    };
  },
});
</script>

<style scoped>
.bg {
  background-color: #fff;
}

.desktop-container {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 80rem;
}

.desktop-container-1 {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.desktop-container-2 {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  align-items: center;
}

.desktop-container-3 {
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
}

.desktop-container-4 {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.desktop-container-5 {
  display: none;
}

.desktop-container-6 {
  display: flex;
  margin-left: 1rem;
}

.desktop-nav-link {
  display: inline-flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #1f2937;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;
}

.desktop-nav-link-active {
  display: inline-flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #1d4ed8;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-bottom: 2px solid #1d4ed8;
  text-decoration: none;
}

.desktop-nav-link-icon {
  color: #838383;
  width: 1.25rem;
  height: 1.25rem;
}

.desktop-nav-link-icon-active {
  color: #1d4ed8 !important;
}

.desktop-nav-link-text {
  margin-left: 10px;
}

.mobile-nav-link {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #1f2937;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  text-decoration: none;
}

.mobile-nav-link:hover {
  background-color: #1d4ed8;
  color: #ffffff;
}

.mobile-nav-link-active {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #1d4ed8;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  text-decoration: none;
}

.humburger {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}

.mobile-container-1 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  margin-top: 0.25rem;
}

.mobile-menu-button {
  display: inline-flex;
  padding: 0.5rem;
  color: #9ca3af;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
}

.logo {
  color: #1d4ed8;
  font-weight: bold;
  font-size: 1.2rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.icon {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}

.hidden-icon {
  display: none;
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 640px) {
  .desktop-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .desktop-container-1 {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .desktop-container-2 {
    display: none;
  }

  .desktop-container-3 {
    justify-content: flex-start;
    align-items: stretch;
  }

  .desktop-container-5 {
    display: block;
    margin-left: 1.5rem;
  }

  .mobile-container {
    display: none;
  }
}

@media (min-width: 1024px) {
  .desktop-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
