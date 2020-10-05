
<template  lang="html">
<div id="flexcontainer">
  <!-- OBS. att jag tidigare använde parametern 'type' för beskrivning av objektet, så det kan uppstå problem om jag glömde att 
       ändra det någonstans -->
  <Box v-for='(thing) in boxes' :key="thing.name" :item="thing" :id="thing.id">
    <button class="butt" v-show="!isbookmarked(thing.type,thing.id)" v-on:click="bookmark(thing.type, thing.id, thing.name)">Bookmark</button>
    <!-- Jag får inte den här knappen att synas med v-show - vet inte varför v-show="isbookmarked(thing.type,thing.id)"-->
    <button class="butt" v-on:click="remove(thing.type, thing.id)">Remove</button></Box>

    <!--Fredi: första parametern i bookmark() är type, 0 för turistmål, 1 för restauranger. 
               Andra parametern är ställets ID (som du borde kunna få automatiskt om du laddar in lådorna med en for-loop) 
               och sista är namnet. -->
</div>

</template>

<script>
import Box from '../components/Food-Sight.vue'

    export default {
        name: "BoxHolder",
        components:{
        Box,
        },
        props:{
          boxes: Array,
          bookmark: Function,
          remove: Function,
          isbookmarked: Function,
        }
    }
</script>

<style>
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
div#flexcontainer{
      height: 92%;
      width: calc(100% - 40vh);;
      float: right;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content:flex-start;
      padding-left: 15px;
      overflow-x: scroll;
      overflow-y: hidden;
    }
div.box {
        background-color: white;
        color:black;
        border-radius: 12px;
        display: block;
        padding: 8px;
        margin: 15px;
        margin-top:0px;
        margin-right:0px;
        width: 42vh;
        height: 42vh;
        }

</style>