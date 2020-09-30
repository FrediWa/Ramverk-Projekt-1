<template lang="html">
  <div class="box">
    <img :src="item.img">
    <h3>{{item.name}}</h3>
    <p>{{item.type}}</p>
    <p v-if="item.cost">Cost: {{item.cost}}</p>

  </div>
</template>

<!-- Varje restaurang/sevärdhet ska passeras till denna template som ett objekt -->
<script>
export default {
  name: 'Box',
  props:{item: Object}
}
</script>

<style lang="css" scoped>
</style>
