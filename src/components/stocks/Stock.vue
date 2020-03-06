<template>
  <div>
    <div class="card">
      <div class="card-header alert-success">
        <h4 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-sm "
            :class="insufficientFunds ? 'btn-danger' : 'btn-success'"
            @click="buyStock"
            :disabled="
              insufficientFunds || quantity <= 0 || Number.isInteger(quantity)
            "
          >
            {{ insufficientFunds ? "Low Fund" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>

<style></style>
