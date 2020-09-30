<template  lang="html">
  <div class="filter">
 <h2>Filter Attractions</h2>
      <div>
        You can enter the adress of the place you'll be 
        staying for a tailored list. Any data you enter will 
        be deleted as soon as the session with the robot is over.
      </div>
      <p>Location of stay</p>
      <input type="adress" v-model="adress" class="form-conrol form-control-lg" style="border-style: solid; border:grey,1px;border-radius: 9px;width: 95%;">
    <br>
      <div>
        <button>15 minutes</button>
        <button>15 minutes</button>
        <button>1 hour transit</button>
      </div>
    <br>
    <button v-if=filtered id="clear">Clear all filters</button>
  </div>
</template>

<script>
export default {
  name: "SightFilterer",
}
</script>

<style>
    .filter {
        background-color: white;
        color:black;
        border-radius: 12px;
        display: block;
        padding: 8px;
        margin: 10px;
        width: 40vh;
        height: 40vh;
        display: inline-block;
        height: 87%;
        position: absolute;
    }
    button{
      margin-top: 10px;
      text-align: center;
      background-color: white;
      border-style: solid; 
      border:grey,1px;
      border-radius: 9px;
      width: 10vh;
      height: 10vh;
    }
    button#clear{
      text-align: center;
      background-color: white;
      border-style: solid; 
      border:grey,1px;
      border-radius: 9px;
      width: 95%;
      height: 10vh;
    }
</style>