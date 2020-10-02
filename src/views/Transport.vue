<template>
<div class="about">
    <router-link class="go-back-button" to="/">Go Back</router-link>
    <div class="wrapper">
         <div class="boxs box1">
             <img :src="img1" id="img1" class="rounded float-right">
             <Post :first-title="'Get help through your journey'"  id="oneTitle"/>
             <Post :content-text="'I unfortunately cannot follow you  \
                                   everywhere but luckily there is \
                                   a tool that can. Download the  \
                                   free ASL app to your mobile. The app  \
                                   will help you to easily find your way  \
                                   around the city. It is also the easiest \
                                   way to pay your ticket. '"  id="oneContent" />
            <Post :content-text="' You can also easily find attractions  \
                                   on the app and if you find something  \
                                   interesting, you can bookmark it.'"/>
            <Post :content-text="'The app is available on the Playstore and on AppStore'"/>

         </div>

          <div class="boxs box2">
             <Post  id="two"
             :title-text="'Too much hassle'"
             :content-text="'Order an Airport Taxi and you will be at your destination in no time!'"/>
            <alert-box />
            <img :src="img2" id="img2">
            
          </div>

         <div class="boxs box3">
             <Post id="three"
              :title-text="'City Bikes'"
              :content-text="'Learn more'"/>

              <div class="row">
                <div class="column">
                    <img :src="img3" style="width:100%">
                </div>
                <div class="column">
                    <img :src="img4" style="width:100%" >
                </div>
            </div>

         </div>

         <div class="boxs box4">
             <Post id="four"
             :title-text="'Indoor Map'" />
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
                img1: require('../assets/ASLapp.png'),
                img2: require('../assets/car.png'),
                img3: require('../assets/qrcode.png'),
                img4: require('../assets/Bike.png'),
                img5: require('../assets/map.png')
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
    width: 1900px;
    height: 800px;
}

.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr ;
    grid-gap: 2em;
    grid-auto-rows: minmax(100px, auto);
    justify-items: stretch;
    align-items: stretch;
    width: 130vw;
    height: 50vw;
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
#img1{
    margin-top: 100px;
}
#img2{
    border-radius: 15px;
    height: 200px;
    margin-top: 10px;
}
#img3{
    margin-bottom: 100px;

}
#img4{
    border-radius: 15px;
    margin-bottom: 30px;
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
