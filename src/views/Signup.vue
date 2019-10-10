<template>
  <div class="home">
    <h1>Signup complete</h1>
    <p>Thanks for subscribing.</p>
    <p>We've successfully <span class='fun'>charged USD 99</span> to your bank account.</p>
    <p>This amount will rebill every 3 days forever, and you cannot cancel. Have a great day.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style>
.fun {
  color: red;
  font-weight: bold;
}
</style>