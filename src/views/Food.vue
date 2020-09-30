<template>
  <div class="Food">
    <router-link to="/">Go Back</router-link>
        <FoodFilterer/>
        <BoxHolder :boxes="food"/>

  </div>
</template>

|<script>
import FoodFilterer from '../components/FoodFilterer.vue'
import BoxHolder from '../components/BoxHolder.vue'

export default {
  name: 'Food',
  components: {
    FoodFilterer,
    BoxHolder
  },
    data(){
    return{
      food: [{img: '../assets/logo.png',name: 'McDonalds', type:'Fast Food', loc: 'multiple locations'},{img: '../assets/logo.png',name: 'Savoy', type:'Fine Dining', loc: 'Eteläesplanadi 14, Helsinki'}]
    }
  },
}
</script>
<style>
.Food {
  height:80vh;
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