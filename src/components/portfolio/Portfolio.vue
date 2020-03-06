<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.name"
      :stock="stock"
      class="col-sm-6 col-md-4 mb-2"
    ></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

<style></style>
