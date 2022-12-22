<template>
  <v-container fluid :class="{ black: darkMode }">
    <v-row class="data-row">
      <v-col cols="12" md="4">
        <v-card :dark="darkMode">
          <v-card-title>
            <h3>Balances</h3>
            <v-spacer />
          </v-card-title>
          <v-data-table
            :dark="darkMode"
            :headers="headersBalances"
            sort-by="name"
            :items="listBalances"
            disable-pagination
            item-key="name"
            hide-default-footer
            :loading="!listBalances || listBalances.length < 1"
            must-sort
          >
            <template #item.balance.value="{ item }">
              <span v-if="item.balance.currency === 'USD'">US$</span>
              <span v-else-if="item.balance.currency === 'BRL'">R$</span>
              <span v-else>{{ item.balance.currency }}</span>
              {{ item.balance.value }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md>
        <v-card :dark="darkMode">
          <v-card-title>
            <h3>Transactions</h3>
            <v-spacer />
          </v-card-title>
          <v-data-table
            :dark="darkMode"
            :headers="headersTransactions"
            sort-by="origin"
            :items="listTransactions"
            disable-pagination
            hide-default-footer
            item-key="id"
            :loading="!listTransactions || listTransactions.length < 1"
            must-sort
          >
            <template #item.amount.value="{ item }">
              <span v-if="item.amount.currency === 'USD'">US$</span>
              <span v-else-if="item.amount.currency === 'BRL'">R$</span>
              <span v-else>{{ item.amount.currency }}</span>
              {{ item.amount.value }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="signature-row" align="end" justify="center">
      <v-col cols="auto">
        <div :class="{ 'white--text': darkMode, 'text-subtitle-1': true }">
          Made with <span class="red--text">♥</span> by
          <a href="https://rickpalmeira.dev" class="text-decoration-none">
            Rick Palmeira
          </a>
        </div>
      </v-col>
    </v-row>
    <v-btn
      fab
      bottom
      right
      fixed
      x-large
      elevation="15"
      :dark="!darkMode"
      :color="darkMode ? 'amber lighten-2' : 'deep-purple lighten-1'"
      @click="darkMode = !darkMode"
    >
      <v-icon>
        {{ darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
      </v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      darkMode: true,
      listBanks: [],
      listBalances: [],
      listTransactions: [],
      headersBalances: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Balance',
          value: 'balance.value',
        },
      ],
      headersTransactions: [
        {
          text: 'Bank',
          value: 'origin',
        },
        {
          text: 'Value',
          value: 'amount.value',
        },
        {
          text: 'Type',
          value: 'type',
        },
        {
          text: 'Description',
          value: 'description',
        },
      ],
    };
  },
  mounted() {
    this.getBanks();
    this.getBalances();
    this.getTransactions();
  },
  methods: {
    getBanks() {
      Vue.axios({
        method: 'get',
        url: '/api/bank',
        headers: { 'Content-Type': 'application/json' },
      }).then(response => {
        this.listBanks = response.data;
      });
    },
    getBalances() {
      Vue.axios({
        method: 'get',
        url: '/api/bank/balances',
        headers: { 'Content-Type': 'application/json' },
      }).then(response => {
        this.listBalances = response.data;
      });
    },
    getTransactions() {
      Vue.axios({
        method: 'get',
        url: '/api/bank/transactions',
        headers: { 'Content-Type': 'application/json' },
      }).then(response => {
        this.listTransactions = response.data;
      });
    },
  },
};
</script>
<style scoped>
.data-row {
  min-height: 90vh;
}
.signature-row {
  min-height: 10vh;
}
</style>
