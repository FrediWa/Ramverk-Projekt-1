<template>
  <div class="summary">
    <router-link to="/">Go Back</router-link>
    <h1>This is the summary page</h1>
<div v-if="1==2">
  <Box
  v-for="item in items"
  v-bind:item="item"
  v-bind:key="item.id">
</Box>

</div>
<ul v-if="Bookmarked.attractions.length > 0">
  <li v-for="attraction in Bookmarked.attractions" v-bind:item="attraction" v-bind:key="attraction.id">
   <p>{{ attraction.name }}</p><button v-on:click="remove(attraction.type, attraction.id)">X</button>
  </li>
</ul>

     <ul v-if="Bookmarked.restaurants.length > 0">
       <li v-for="restaurant in Bookmarked.restaurants" v-bind:item="restaurant" v-bind:key="restaurant.id">
        <p>{{ restaurant.name }}</p><button v-on:click="remove(restaurant.type, restaurant.id)">X</button>
       </li>
     </ul>

  </div>

</template>

<script>
import Bookmarked from "../stores/bookmarkedItems.js"
import Box from '../components/Food-SightHolder.vue'

export default {
  name: 'Parent',

  components: {
    Box
  },

  data () {
    return {
      Bookmarked: Bookmarked.data,
    }
  },
  methods: {
    remove(type, id){
      Bookmarked.methods.remove(type, id);
    }
  }
}
</script>
