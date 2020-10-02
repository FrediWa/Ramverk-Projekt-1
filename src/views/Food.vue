<template>
  <div class="Food">
    <router-link class="go-back-button" to="/">Go Back</router-link>
        <FoodFilterer/>
        <!-- propsen i barnelementen har samma namn som de funktioner de motsvarar -->
        <BoxHolder :boxes="sights" :bookmark="bookmark" :remove="remove" :isbookmarked="isbookmarked"/>

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
      food: [{type: 1,id: 0,img: '../assets/logo.png',name: 'McDonalds', desc:'Fast Food', loc: 'multiple locations'},
             {type: 1,id: 1,img: '../assets/logo.png',name: 'Savoy', desc:'Fine Dining', loc: 'Eteläesplanadi 14, Helsinki'},
             {type: 1, id: 2, name:"Bronda"}, {type: 1, id: 3, name:"Hesburger"}, {type: 1, id: 4, name:"Gaijin"}]
    }
  },
    methods: {
      bookmark(type, id, name){
        Bookmarked.methods.bookmark(type, id, name)
      },
      remove(type, id){
        Bookmarked.methods.remove(type, id)
      },
      isbookmarked(type, id){
        Bookmarked.methods.isbookmarked(type, id)
      }
    },
}
</script>
<style scoped>
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
