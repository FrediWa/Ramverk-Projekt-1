<!-- Jag tror det är bäst att använda displaytoggling för filtret, annars blir det rådd med objektenas index -->
<template  lang="html">
  <div class="Ffilter">
 <h2>Filter Restaurants</h2>
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

<!-- Vi vill ladda ner ett objekt med restauranger och dessutom filtrera dem efter olka kriterier. Jag tänker mig att 
     restaurangerna kan laddas ner varje gång boplatsen uppdateras, första gången on load antingen med en deafultboende 
     (t.ex. flyplatsen) eller ett boende som definierats på en annan view. 
     -->

<script>
export default {
  name: "FoodFilterer",
}
</script>

<style>
    div.Ffilter {
        background-color: white;
        color:black;
        z-index:1000;
        border-style: solid; 
        border:2px,;
        border-color: rgb(170,67,146);
        border-radius: 12px;
        padding: 8px;
        margin: 10px;
        margin-top: 0px;
        width: 40vh;
        height: 87%;
        float:left;
        position: absolute;
    }
    button.filter{
      margin-top: 10px;
      text-align: center;
      background-color: white;
      font-family: 'Concert One';
      border-style: solid; 
      border:grey,1px;
      border-radius: 9px;
      width: 10vh;
      height: 10vh;
    }
    button#clear{
      text-align: center;
      background-color: white;
      font-family: 'Concert One';
      border-style: solid; 
      border:grey,1px;
      border-radius: 9px;
      width: 95%;
      height: 10vh;
    }
</style>