<template>
  <div class="news">
    News Page!
    <p><router-link to="/home">Home</router-link></p>
    <p><button @click="getMoreDate">Get More!</button></p>
    <Spinner :show="getRequestStatus"></Spinner>
    <transition-group tag="ul" name="newsitem">
      <NewsItem v-for="item in getNewsList" :key="item.contentid" :item="item"></NewsItem>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '../components/Spinner.vue'
import NewsItem from '../components/NewsItem.vue'

export default {
  components: { Spinner, NewsItem },

  created () {
    this.$store.dispatch('fetchInitNewsList')
  },

  computed: {
    ...mapGetters({
      getNewsList: 'getNewsList',
      getRequestStatus: 'getRequestStatus'
    })
  },

  methods: {
  	getMoreDate () {
  		this.$store.dispatch('fetchMoreNewsList')
  	}
  }

}
</script>
<style>
	.news {
		padding: 30px;
	}
	.news p {
		line-height: 30px;
	}
	.news button {
		padding: 5px 10px;
		border: 1px solid #666;
		background: #fff;
	}
</style>