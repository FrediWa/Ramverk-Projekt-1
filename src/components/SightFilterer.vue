<!-- Jag tror det är bäst att använda displaytoggling för filtret, annars blir det rådd med objektenas index -->
<template  lang="html">
  <div class="Sfilter">
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
        <button class="butt">15 minutes</button>
        <button class="butt">30 minutes</button>
        <button class="butt">1 hour transit</button>
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
    div.Sfilter {
        background-color: white;
        color:black;
        z-index:1000;
        border-style: solid; 
        border:2px,;
        border-color: rgb(68,178,112);
        border-radius: 12px;
        padding: 8px;
        margin: 10px;
        margin-top: 0px;
        width: 40vh;
        height: 87%;
        float:left;
        position: absolute;
    }
    
    button#clear {
      text-align: center;
      background-color: white;
      border-style: solid; 
      border:grey,1px;
      border-radius: 9px;
      width: 95%;
      height: 10vh;
    }
</style>