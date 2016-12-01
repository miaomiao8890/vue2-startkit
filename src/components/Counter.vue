<template>
  <div>
    <span class="counter-span">Counter Component!!!!!!!</span>
    <p>
      <span>{{ getCount }}</span>
    </p>
    <p>
      <button class="counter-button" @click="decrementCount()">-</button>
      <button class="counter-button" @click="incrementCount()">+</button>
      <button class="counter-button" @click="consoleStore()">console store</button>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getCount: 'getCount'
    })
  },

  methods: {
    ...mapMutations({
      decrementCount: 'DECREMENT_COUNTER',
      incrementCount: 'INCREMENT_COUNTER'
    }),
    consoleStore () {
      console.log(this.$store)
    }
  }
}
</script>

<style>
.counter-span {
  color: #f00;
}
.counter-button {
  padding: 10px;
  border-color: #f00;
  margin-right: 10px;
}
</style>
