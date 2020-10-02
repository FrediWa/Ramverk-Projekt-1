<!-- TODO: Lista ut hur man får tillgång till funktionerna i föräldraelementet -->
<!-- TODO: Lägg till en 'type' (0-1) beroende på vilken array objektet är taget ur -->
<template lang="html">
<!-- Varje restaurang/sevärdhet ska passeras till denna template som ett objekt -->
  <div class="box" :id="num">
    <img :src="item.img">
    <h3>{{item.name}}</h3>
    <p>{{item.desc}}</p>
    <p v-if="item.cost">Cost: {{item.cost}}</p>
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'Box',
  props:{item: Object, num:Number}
}
</script>

<style lang="css" scoped>
</style>
