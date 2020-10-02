<template>
  <div class="summary-screen">
    <div class="summary-container">

      <router-link to="/">Go Back</router-link>
      <h1>Here are all places you've taken an interest in</h1>
      <h2>Below you will find a QR code which you can scan in order to import your bookmarks to the ASL app on your phone. More information can be found <router-link to="/Help">here</router-link></h2>
      <ul v-if="Bookmarked.attractions.length > 0" class="summary-list">
        <h2>Places</h2>
        <li v-for="attraction in Bookmarked.attractions" v-bind:item="attraction" v-bind:key="attraction.id" class="summary-list-item">
         <p>{{ attraction.name }}</p><button v-on:click="remove(attraction.type, attraction.id)">🆇</button>
        </li>
      </ul>

       <ul v-if="Bookmarked.restaurants.length > 0" class="summary-list">
         <h2>Restaurants</h2>
         <li v-for="restaurant in Bookmarked.restaurants" v-bind:item="restaurant" v-bind:key="restaurant.id" class="summary-list-item">
          <p>{{ restaurant.name }}</p><button v-on:click="remove(restaurant.type, restaurant.id)">🆇</button>
         </li>
       </ul>

    </div>
  </div>
</template>

<script>



import Bookmarked from "../stores/bookmarkedItems.js";

export default {
  name: 'Parent',

  components: {
  },

  data () {
    return {
      Bookmarked: Bookmarked.data,
    }
  },
  methods: {
    remove(type, id){
      Bookmarked.methods.remove(type, id);
    }
  }
}
</script>

<style>
h1, h2{
  color: #ccc
}
h1{
  font-size: 3em;
}
.summary-screen{
  background-color: #282828;
  min-height: 100vh;
  color: #FFFFFF;
}
.{
  font-size: initial;
  color: initial;
  background-color: initial;
}
.summary-list{
  margin-top: 50px;
  list-style: none;
  font-size: 3em;
}
.summary-list-item{
  display: flex;
  flex-wrap: wrap;
}
.summary-list-item:nth-child(odd){
  background-color: #333;
}
.summary-list-item p{
  box-sizing: border-box;
  margin:0;
  padding: 10px;
  width: 92%;
  text-align: left;
}
.summary-list-item button{
  width: 8%;
  color: #FF3322;
  font-weight: bold;
  background-color: transparent;
  border:none;
}
  .summary-container{
    padding: 5vh;
    width: 1200px;
    margin: 0 auto;
  }
  @media only screen and ( max-width: 1200px){
    .summary-container{
      width: 90%;
      margin: 0 5%;
    }
  }
</style>
