<template>
<div class="about">
    <router-link to="/">Go Back</router-link>
  <div id="app">
    <div class="wrapper">
         <div class="box box1">
             <Post
             :title-text="'Get help through your journey'" 
             :content-text="'I cannot unfortunately follow you  \
                    everywhere but luckily there is \
                    a tool that can. Download the  \
                    free ASL app to your mobile. The app  \
                    will help you to easily find your way  \
                    around the city. It is also the easiest \
                    way to pay your ticket. \
                    You can also easily find attractions  \
                    on the app and if you find something  \
                    interesting, you can bookmark it  \
                    The app is available on the  \
                    Playstore and on AppStore'"/>
         </div>

          <div class="box box2">
             <Post 
             :title-text="'Too much hassle'" 
             :content-text="'I can just call a taxi and you will be at your destination in no time!'"/>
          </div>

         <div class="box box3">
             <Post
              :title-text="'City Bikes'" 
              :content-text="'Learn more'"/>
         </div>

         <div class="box box4">
             <Post 
             :title-text="'Indoor Map'" />
         </div>

  
    </div>
  </div>  
</div>
  
</template>

<script>
import Post from "../components/TransportText.vue"

export default {
    name: "Transport",
    components: {
        Post
    }
};
    

</script>


<style>
body{
    background-color: #30BFBF;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 20px;
}

.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr ;
    grid-gap: 2em;
    grid-auto-rows: minmax(100px, auto);
    justify-items: stretch;
    align-items: stretch;
    width: 130vw;
}

.wrapper > div{
    background: white;
    padding: 1em;
    border-radius: 20px;
}

.box1{
   grid-column: 1/2;   
   grid-row: 1/6;      
}
.box2{
   grid-column: 2;
   grid-row: 1/4;
   text-align: center;
}
.box3{
   grid-column: 2;   
   grid-row: 4/6;
}
.box4{
    grid-column: 3;
    grid-row: 1/6;
}

.back-button {
    font-size: 20px;
    text-decoration: none;
    color: white;
}

.taxi-button {
    color: black;
    background: #ffdf00;
    border: none;
    border-color: transparent;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    width: 200px;
    margin-top: 15px;
    border-radius: 10px;
}

h1{
    font-size: 45px;
}
h2{
    font-size: 30px;
    text-align: center;
}
p{
    font-size: 20px;
}
p1{
    font-size: 18px;
}
</style>
