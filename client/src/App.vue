<template>
  <v-app>
    <bank-view />
  </v-app>
</template>

<script>
import BankView from './components/BankView';

export default {
  components: {
    BankView,
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
