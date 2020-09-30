<template>
  <div class="Food">
    <router-link to="/">Go Back</router-link>
        <FoodFilterer/>
        <BoxHolder :boxes="food"/>

  </div>
</template>

|<script>
import FoodFilterer from '../components/FoodFilterer.vue'
import BoxHolder from '../components/Food-SightHolder.vue'
  import Bookmarked from "../stores/bookmarkedItems.js";

export default {
  name: 'Food',
  components: {
    FoodFilterer,
    BoxHolder
  },
    data(){
    return{
      Bookmarked: Bookmarked.data,
      food: [{img: '../assets/logo.png',name: 'McDonalds', type:'Fast Food', loc: 'multiple locations'},{img: '../assets/logo.png',name: 'Savoy', type:'Fine Dining', loc: 'Eteläesplanadi 14, Helsinki'}]
    }
  },
    methods: {
      bookmark(type, id, name){
        Bookmarked.methods.bookmark(type, id, name)
      },
      remove(type, id){
        Bookmarked.methods.remove(type, id)
      }
    },
}
</script>
<style>
div.Food {
  height:90vh;
  background-color: rgb(170,67,146);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p.Food {
  margin-left: 6px;
  }
a.Food {
  color:white;
  }
</style>