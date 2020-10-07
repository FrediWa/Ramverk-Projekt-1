<template>
  <div>
    <div class="grid2x2">
      <div class="box box1"><div><router-link to="/transport">Transport</router-link></div></div>
      <div class="box box2"><div><router-link to="/attractions">Attraction</router-link></div></div>
      <div class="box box3"><div><router-link to="/food">Food</router-link></div></div>
      <div class="box box4"><div><router-link to="/help">Help</router-link></div></div>
    </div>
    <footer>
      <div class="summary-footer"><router-link to="/summary">Summary</router-link></div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style scoped>

  .grid2x2 {
    margin-top: 10px;
    margin-left: 150px;
    margin-right: 150px;
    min-height: 95%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .grid2x2 > div {
    display: flex; 
    flex-basis: calc(50% - 40px); 
    justify-content: center;
    flex-direction: column;
  }
  .grid2x2 > div > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  
  .box { margin: 20px; }
  .box1 { background-color:#118f8f;}
  .box1:hover{ background-color: #30BFBF;}
  .box2 { background-color:green; }
  .box2:hover{ background-color: rgb(68,178,112);}
  .box3 { background-color: purple; }
  .box3:hover{ background-color: rgb(170,67,146);}
  .box4 { background-color:red; }
  .box4:hover{background-color:lightcoral;}

  div a{
    text-decoration: none;
    color: white;
    font-size: 50px;
  }
  .summary-footer{
    background:#141414;
    margin-left: 40%;
    margin-right: 40%;
    border-radius: 10px;
  }
  .summary-footer:hover{background-color:#282828;}
  
</style>
