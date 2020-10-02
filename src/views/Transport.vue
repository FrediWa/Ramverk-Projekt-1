<template>
<div class="about">
    <router-link class="go-back-button" to="/">Go Back</router-link>
    <div class="wrapper">
         <div class="boxs box1">
             <Post id="one"
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

          <div class="boxs box2">
             <Post  id="two"
             :title-text="'Too much hassle'"
             :content-text="'Order an Airport Taxi and you will be at your destination in no time!'"/>
            <alert-box />
          </div>

         <div class="boxs box3">
             <Post id="three"
              :title-text="'City Bikes'"
              :content-text="'Learn more'"/>
              <Images />
         </div>

         <div class="boxs box4">
             <Post id="four"
             :title-text="'Indoor Map'" />
             <img :src="product[0]" />
         </div>


    </div>
  </div>

</template>

<script>
import Post from "../components/TransportText"
import AlertBox from "../components/AlertBox"
import Images from "../components/TransportPics"

export default {
    name: "Transport",
    components: {
        Post,
        AlertBox,
        Images
    },
     data: () => {
            return {
                product: [
                    {
                        image: require("@/assets/Bike.png")
                    },
                    {
                        image: require("@/assets/ASLapp.png")
                    }
                ]
            }
        }
};

</script>




<style>
.about{
    background-color: #30BFBF;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 20px;
    width: 1900px;
    height: 700px;
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

h2{
    font-size: 30px;
    text-align: center;
    font-weight: bold;
}
p{
    font-size: 20px;
}
p1{
    font-size: 18px;
}
#one h2{
    font-size: 45px;
}
#one{
    text-align: left;
}
#three{
    text-align: left;
}
</style>
