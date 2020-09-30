
<template  lang="html">
<div id="flexcontainer">
  <Box v-for='thing in boxes' :key="thing.name" :item="thing"></Box>
</div>
                <!--
                <p v-for="(sight, index) in sights" :key="index">
                <a v-bind:href="link.url">{{link.name}}</a>
                -->

</template>

<script>
import Box from '../components/Box.vue'

    export default {
        name: "BoxHolder",
        components:{
        Box,
        },
        props:{
          boxes: Array
        }
    }
</script>

<style>
    div.box {
        background-color: white;
        color:black;
        border-radius: 12px;
        display: block;
        padding: 8px;
        margin: 10px;
        width: 40vh;
        height: 40vh;
        }
</style>