<template>
  <div class="summary">
    <router-link to="/">Go Back</router-link>
    <h1>This is the summary page</h1>
   <ul>
     <li>
       <Box
       v-for="item in items"
       v-bind:item="item"
       v-bind:key="item.id">
       </Box>
     </li>
   </ul>
  </div>
</template>

<script>
import Box from '../components/Box.vue'

export default {
  name: 'Parent',

  components: {
    Box
  },

  data () {
    return {
      items: [
        {
          img: 'linnanmaki.jpg',
          name: "Linnanmäki",
          type: 'Amusement park'
        },
        {
          img: 'ateneum.jpg',
          name: "Ateneum",
          type: 'Museum'
        },
        {
          img: 'corner.jpg',
          name: "Cornern",
          type: 'TLK space',
          cost: "$$"
        }
      ]
    }
  }
}
</script>
