<template>
  <div class="home">
    <h1>TerribleCalc</h1>
    <Calc/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Calc from '@/components/Calc.vue'; // @ is an alias to /src

export default Vue.extend({
  components: {
    Calc,
  },
});
</script>
