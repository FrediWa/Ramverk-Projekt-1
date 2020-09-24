<template lang="html">
  <div>
    <p>Img: {{item.img}}</p>
    <p>Name: {{item.name}}</p>
    <p>Type: {{item.type}}</p>
    <p v-if="item.cost">Cost: {{item.cost}}</p>

  </div>
</template>

<script>
export default {
  name: 'Box',
  props:{item: Object}
}
</script>

<style lang="css" scoped>
</style>
