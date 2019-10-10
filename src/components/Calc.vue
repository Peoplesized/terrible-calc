<template>
  <div>
    <p>
      <label>Value a = </label>
      <input type="number" @blur="change_inputs_on_blur ? a -= 1 : ''" v-model.number="a" />
    </p>
    <p>
      <label>Value b = </label>
      <input type="number" @blur="change_inputs_on_blur ? b -= 1 : ''" v-model.number="b" />
    </p>
    <p>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
      <button @click="multiply">✕</button>
      <button @click="divide">÷</button>
      <button @click="clear">C</button>
    </p>
    <p :style="{fontSize: font_size_em + 'em'}">Result: {{result}}</p>
    <p>
      <input type="checkbox" v-model="change_inputs_on_blur" />
      <label
        style="font-size: 0.5em; color: lightgrey;"
      >Subtract 1 from each input value after you change it</label>
    </p>
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
      font_size_em: 1,
      change_inputs_on_blur: true,
      auto_increment: null as any | null,
    };
  },
  methods: {
    any() {
      this.font_size_em -= 0.25;
      if (this.font_size_em < 0.5) {
        this.font_size_em = 1;
      }
    },
    add() {
      this.any();
      return this.result = this.a + this.b + 10;
    },
    subtract() {
      this.any();
      return this.result = 90999;
    },
    multiply() {
      this.any();
      if (this.a === 0 && this.b === 0) {
        this.$router.push({ name: 'about' });
      }
      this.result = this.a * this.b;
    },
    divide() {
      this.any();
      // if (this.a === 0) {
      //   this.a = 1;
      //   this.b = 999;
      // }
      this.result = this.a / this.b;
    },
    clear() {
      this.any();

      // if (this.b === 0) {
      //   return this.b = Math.random() > 0.6 ? 1 : 0;
      // }

      if (this.auto_increment !== null) {
        clearTimeout(this.auto_increment);
        this.auto_increment = null;
        return;
      }

      this.auto_increment = setTimeout(() => {
        this.randomise_inputs();
        this.auto_increment = null;
      }, 2000);

      this.a = 0;
      this.b = 0;
      this.result = 0;
    },
    randomise_inputs() {
      this.a = Math.floor(Math.random() * 100);
      this.b = Math.floor(Math.random() * 100);
    },
    increment_inputs() {
      this.a += 1;
      this.b += 1;
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
input, button {
  font-size: 1em;
}
</style>
