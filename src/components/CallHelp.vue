<template lang="html">
  <div>
      <a @click="callHelp(call.task)"><div><p>{{call.prepare}}</p></div></a>
  </div>
</template>

<script>


export default {
  name: 'Call',
  props: {
    call: Object,
    callHelp: Function
  },
  data() {
    return{

    }
  }
}
</script>

<style lang="css" scoped>
</style>