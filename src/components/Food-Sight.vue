<!-- TODO: Lista ut hur man får tillgång till funktionerna i föräldraelementet -->
<template lang="html">
<!-- Varje restaurang/sevärdhet ska passeras till denna template som ett objekt -->
  <div class="box">
    <img :src="item.img">
    <h3>{{item.name}}</h3>
    <p>{{item.type}}</p>
    <p>TEST: id={{id}}<p>
    <p v-if="item.cost">Cost: {{item.cost}}</p>
    <button v-on:click="bookmark(1, 4, item.name)">Bookmark</button>
    <button v-on:click="remove(4)">Remove</button>
    <!--Fredi: första parametern i bookmark() är type, 0 för turistmål, 1 för restauranger. 
               Andra parametern är ställets ID (som du borde kunna få automatiskt om du laddar in lådorna med en for-loop) 
               och sista är namnet. -->

  </div>
</template>

<script>
export default {
  name: 'Box',
  props:{item: Object, id:Number}
}
</script>

<style lang="css" scoped>
</style>
