<template>
  <div class="Sights">
    <router-link to="/">Go Back</router-link>
        <SightFilterer/>
        <BoxHolder :boxes="sights"/>
  </div>
</template>

<script>
  import SightFilterer from '../components/SightFilterer.vue'
  import BoxHolder from '../components/Food-SightHolder.vue'
  import Bookmarked from "../stores/bookmarkedItems.js";

  export default {
    name: 'Attractions',
    components: {
      SightFilterer,
      BoxHolder
    },
    data(){
      return {
        Bookmarked: Bookmarked.data,
        sights: [{img: '../src/assets/logo.png',name: 'Borgbacken', type:'Kul ställe', loc: 'Helsinginkatu, Helsinki'},{img: '../assets/logo.png',name: 'Sibelius Monument', type:'Kuckuu!', loc: 'Sibelius Park, Helsinki'}]
      }
    },
    methods: {
      bookmark(type, id, name){
        Bookmarked.methods.bookmark(type, id, name)
      },
      remove(type, id){
        Bookmarked.methods.remove(type, id)
      }
    }
  }
</script>
<style>
div.Sights {
  height:90vh;
  background-color: rgb(68,178,112);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p.Sights {
  margin-left: 6px;
  }
a.Sights {
  color:white;
    }
</style>