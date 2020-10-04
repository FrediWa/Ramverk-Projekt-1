<template>
<div class="about">
    <router-link class="go-back-button" to="/">Go Back</router-link>
    <div class="wrapper">
         <div class="boxs box1">
             <Post :first-title="'Get help through your journey'" />
                          <img :src="img1" id="img1" alt="ASL app" class="rounded float-right">
             <Post :content-text="'I unfortunately cannot follow you  \
                                   everywhere but luckily there is \
                                   a tool that can. Download the  \
                                   free ASL app to your mobile. The app  \
                                   will help you to easily find your way  \
                                   around the city. It is also the easiest \
                                   way to pay your ticket. '"  id="oneContent" />
            <Post :content-text="' You can easily find attractions  \
                                   on the app and if you find something  \
                                   interesting, you can bookmark it.'"/><br>
            <Post :content-text="'The app is available on the Playstore and on AppStore'"/>

         </div>

          <div class="boxs box2">
             <Post  id="two"
             :title-text="'Too much hassle'"
             :content-text="'Order an Airport Taxi and you will be at your destination in no time!'"/>
            <alert-box />
            <img :src="img2" id="img2" alt="Yellow Taxi"> 
          </div>

         <div class="boxs box3">
             <Post id="three"
              :title-text="'City Bikes'"
              :content-text="'Learn more'"/>

              <div class="row">
                <div class="column">
                    <img :src="img3" id="img3"  alt="QR code">
                </div>
                <div class="column">
                    <img :src="img4" id="img4"  alt="Yellow bike" >
                </div>
            </div>
         </div>

         <div class="boxs box4">
             <Post id="four"
             :title-text="'Airport Map'" />
             <img :src="img5" id="img5"  alt="Aiport map" >
         </div>
        

    </div>
  </div>

</template>

<script>
import Post from "../components/TransportText"
import AlertBox from "../components/AlertBox"

export default {
    name: "Transport",
    components: {
        Post,
        AlertBox
    },
     data: () => {
            return {
                img1: require('../assets/transport/ASLapp.png'),
                img2: require('../assets/transport/car.png'),
                img3: require('../assets/transport/qrcode.png'),
                img4: require('../assets/transport/Bike.png'),
                img5: require('../assets/transport/airportmap.png'),
            }
        }
};

</script>



<style scoped>

.about{
    background-color: #30BFBF;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 20px;
    width: 2260px;
    height: 870px;
}

.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr ;
    grid-gap: 2em;
    grid-auto-rows: minmax(100px, auto);
    justify-items: stretch;
    align-items: stretch;
    width: 155vw;
    height: 52vw;
    text-align: left;
}

.wrapper > div{
    background: white;
    padding: 3em;
    border-radius: 20px;
    margin-left: 30px;
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

#oneContent{
    margin-top: 50px;
}

#two, #four{
    text-align: center;
}

#img2{
    border-radius: 20px;
    height: 200px;
    position: relative; 
    left:46px; 
    top:18px;
}
#img3{
    position: relative; 
    left: -2px;
    top:-25px;
    width:100%;
}

#img4{
    border-radius: 15px;
    position: relative; 
    left:20px; 
    top:-70px;
}
#img5{
    border-radius: 20px;
    position: relative; 
    left:20px; 
    top:-10px;
}

.column {
  float: left;
  width: 40.33%;
  padding: 10px;
  margin-bottom: 30px;
}

.row::after {
  clear: both;
  display: table;
}

</style>
