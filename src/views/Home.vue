<template>
  <div class="home">
    Home Page!
    <p><router-link to="/news">News</router-link></p>
    <p><img :src="imgUrl1"></p>
    <p class="bg-img"></p>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'

const imgUrl = require('../../src/assets/images/edit_icon.png')

export default {
  components: { Counter },
  data () {
  	return {
  		imgUrl1: imgUrl
  	}
  }
}
</script>
<style>
	.home {
		padding: 30px;
	}
	.home p {
		line-height: 30px;
	}
	.bg-img {
		width: 30px;
		height: 30px;
		background: url(../../src/assets/images/edit_icon.png) no-repeat;
	}
</style>