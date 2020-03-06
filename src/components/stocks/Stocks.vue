<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      class="col-sm-6 col-md-4 mb-2"
      :stock="stock"
      :key="stock.name"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
