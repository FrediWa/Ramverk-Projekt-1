<template lang="html">
  <div>
      <a @click="onClick(item.id, item.text)"><div><p>{{item.question}}</p></div></a>
  </div>
</template>

<script>


export default {
  name: 'Questions',
  props: {
    item: Object,
    onClick: Function
  },
  data() {
    return{

    }
  }
  
  /*
  methods: {
    clicked: false,
    openQuestion: function(id){
      console.log(id);
      clicked = true;
      // Hämta in data som ska bytas ut med frågorna i diven
      // v-cloak eller va fan
      // Manipulera inte DOM direkt då du använder vue, använd iställe {{duun}}
     }
   } 
   */
}

</script>

<style lang="css" scoped>
</style>