<!-- TODO: Lista ut hur man får tillgång till funktionerna i föräldraelementet -->
<!-- TODO: Lägg till en 'type' (0-1) beroende på vilken array objektet är taget ur -->
<template lang="html">
<!-- Varje restaurang/sevärdhet ska passeras till denna template som ett objekt -->
  <div class="box" :id="num">
    <img class="boximg" v-if="item.img" :src="item.img">
    <img class="boximg" v-else-if="item.type === 0" :src="cameraimage">
    <img class="boximg" v-else :src="foodimage">
    <h3>{{item.name}}</h3>
    <p>{{item.desc}}</p>
    <p v-if="item.cost">Cost: {{item.cost}}</p>
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'Box',
  props:{item: Object, num:Number},
  data(){
      return {
        foodimage: require('../assets/restaurant-128.png'),
        cameraimage: require('../assets/camera-128x128.png'),
      }
  }
}
</script>

<style lang="css" scoped>
img.boximg{
  max-height: 40%;
}
.box h3{
  margin-bottom: 0px;
}
.box p{
  margin-bottom: 0px;

}
</style>
