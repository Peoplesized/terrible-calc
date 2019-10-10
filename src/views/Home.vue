<template>
  <div class="home">
    <h1>TerribleCalc</h1>
    <Calc/>
    <p class='hard-to-read'>version 4.3.2</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Calc from '@/components/Calc.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Calc,
  },
});
</script>

<style>
  .hard-to-read {
    color: lightgray;
    font-size: 0.7em;
  }
</style>