<template>
  <div class="about">
    <router-link to="/">Go Back</router-link>
    <button v-on:click="bookmark(1, 4, 'Taco Bell')">Test</button>
    <button v-on:click="remove(4)">Remove</button>
    <!--Fredi: första parametern i bookmark() är type, 0 för turistmål, 1 för restauranger. 
               Andra parametern är ställets ID (som du borde kunna få automatiskt om du laddar in lådorna med en for-loop) 
               och sista är namnet. -->
        <SightFilterer/>
        <BoxHolder :boxes="sights"/>
  </div>
</template>

<script>
  import SightFilterer from '../components/SightFilterer.vue'
  import BoxHolder from '../components/BoxHolder.vue'
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
.Sights {
  height:80vh;
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