<template>
  <div class="Food">
    <router-link class="go-back-button" to="/">Go Back</router-link>
        <FoodFilterer/>
        <!-- propsen i barnelementen har samma namn som de funktioner de motsvarar -->
        <BoxHolder :boxes="food" :bookmark="bookmark" :remove="remove" :isbookmarked="isbookmarked"/>

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
      food: [{type: 1,id: 0,img: '',name: 'McDonalds', desc:'Fast Food', loc: 'multiple locations'},
             {type: 1,id: 1,img: '',name: 'Savoy', desc:'Fine Dining', loc: 'Eteläesplanadi 14, Helsinki'},
             {type: 1, id: 2, name:"Bronda"}, {type: 1, id: 3, name:"Hesburger"}, {type: 1, id: 4, name:"Gaijin"},
             {type: 1,id: 5,img: '',name: 'Silvoplee', desc:'Vegetarian Food', loc: 'Toinen linja 3, Helsinki'},
             {type: 1,id: 6,img: '',name: 'Onda', desc:'Restaurant', loc: 'Hämeentie 13 B, Helsinki'},
             {type: 1,id: 7,img: '',name: 'Pikku Ranska', desc:'French Restaurant', loc: 'Ulvilantie 19, Helsinki'},
             {type: 1,id: 8,img: '',name: 'etc', desc:'Restaurant', loc: 'Helsinki'},
             {type: 1,id: 9,img: '',name: 'etc', desc:'Restaurant', loc: 'Helsinki'}
             ]
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
  height:100vh;
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
