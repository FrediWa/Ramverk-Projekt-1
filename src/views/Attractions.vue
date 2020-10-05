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
        sights: [{type: 0, id: 0,img: '',name: 'Borgbacken', desc:'Whee!', loc: 'Helsinginkatu, Helsinki'},
                 {type: 0, id: 1,img: '',name: 'Sibelius Monument', desc:'Peekaboo!', loc: 'Sibelius Park, Helsinki'},
                 {type: 0, id: 2, name:"Sea Life", desc:'Blub blub!'}, 
                 {type: 0, id: 3, name:"Ateneum", desc:'Hmm, yes...'}, 
                 {type: 0, id: 4, name:"Kiasma", desc:'I could paint that!'},
                 {type: 0, id: 5, name:"Tuomiokirkko", desc:'Halleluja!'},
                 {type: 0, id: 6, name:"Kansalliskirjasto", desc:'Sssh!'},
                 {type: 0, id: 7, name:"Salutorget", desc:' '},
                 {type: 0, id: 8, name:"Sveaborg", desc:' '},
                 {type: 0, id: 9, name:"Central Park", desc:'Not like NY'}
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
    }
  }
</script>
<style scoped>
div.Sights {
  height:100vh;
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
