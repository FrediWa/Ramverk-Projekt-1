<template>
  <div class="Sights">
    <router-link class="go-back-button" to="/">Go Back</router-link>
        <SightFilterer/>
        <!-- propsen i barnelementen har samma namn som de funktioner de motsvarar -->
        <BoxHolder :boxes="sights" :bookmark="bookmark" :remove="remove" :isbookmarked="isbookmarked"/>
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
        sights: [{type: 0,id: 0,img: '../src/assets/logo.png',name: 'Borgbacken', desc:'Kul ställe', loc: 'Helsinginkatu, Helsinki'},
                 {type: 0,id: 1,img: '../assets/logo.png',name: 'Sibelius Monument', desc:'Kuckuu!', loc: 'Sibelius Park, Helsinki'},
                 {type: 0, id: 2, name:"Sea Life"}, {type: 0, id: 3, name:"Ateneum"}, {type: 0, id: 4, name:"Sibelius monument"}]
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
    }
  }
</script>
<style scoped>
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
