<template>
  <div class="about">
    <router-link to="/">Go Back</router-link>
    <h1>This is the attractions page</h1>
    <button v-on:click="bookmark(1, 4, 'Taco Bell')">Test</button>
    <button v-on:click="remove(4)">Remove</button>
  </div>
</template>

<script>
  import Bookmarked from "../stores/bookmarkedItems.js";

  export default {
    data(){
      return {
        Bookmarked: Bookmarked.data
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
