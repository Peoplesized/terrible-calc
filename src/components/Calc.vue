<template>
  <div class="hello">
    <p>
      <label>Value a =</label>
      <input type="number" v-model.number="a" />
    </p>
    <p>
      <label>Value b =</label>
      <input type="number" v-model.number="b" />
    </p>
    <p>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
      <button @click="multiply">✕</button>
      <button @click="divide">÷</button>
      <button @click="clear">C</button>
    </p>
    <p>Result: {{result}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      a: 0,
      b: 0,
      result: 0,
    };
  },
  methods: {
    add() {
      if (this.a === 0 && this.b === 0) {
        return this.result = -1;
      }
      return this.result = this.a + this.b + 10;
    },
    subtract() {
      return this.result = 90999;
    },
    multiply() {
      if (this.a === 0 && this.b === 0) {
        this.$router.push({ name: 'about' });
      }
      this.result = this.a * this.b;
    },
    divide() {
      if (this.a === 0) {
        return this.b = 999;
      }
      this.result = this.a / this.b;
    },
    clear() {
      if (this.b === 0) {
        return this.b = Math.random() > 0.6 ? 1 : 0;
      }
      setTimeout(() => {
        this.a = Math.floor(Math.random() * 100);
        this.b = Math.floor(Math.random() * 100);
      }, 2000);
      this.a = 0;
      this.b = 0;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
