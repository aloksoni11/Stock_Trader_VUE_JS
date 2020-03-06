<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border my-1">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/portfolio" activeClass="active" class="nav-item">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link tag="li" to="/stocks" activeClass="active" class="nav-item">
            <a class="nav-link">Stock</a>
          </router-link>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              :class="{ show: isDropdownOpen }"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="isDropdownOpen = !isDropdownOpen"
            >Save & Load</a>
            <div
              class="dropdown-menu"
              :class="{ show: isDropdownOpen }"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </div>
          </li>
        </ul>
        <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style></style>
