<template>
  <div>
     <img :src="image"/>
  </div>
</template>
...
<script>
    export default {
        data: () => {
            return {
                image: require('../assets/Bike.png'),
            }
        }
  }
</script>


<!--<template>
  <div>
    <img :src="product.image[0]" />
  </div>
</template> 

<script>
    export default {
        data: () => {
            return {
                product: [
                    {
                        image: [require("../assets/Bike.png")]
                    },
                    {
                        image: [require("../assets/Logo.png")]
                    },
                    {
                        image: [require("../assets/ASLapp.png")]
                    }
                ] 
            }
        }
  }
</script>-->