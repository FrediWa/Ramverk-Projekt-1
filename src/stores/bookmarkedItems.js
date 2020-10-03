
const Bookmarked = {
  data: {
    attractions: [{type: 0, id: 2, name:"Sea Life"}, {type: 0, id: 3, name:"Ateneum"}, {type: 0, id: 4, name:"Sibelius monument"}],
    restaurants: [{type: 1, id: 2, name:"Bronda"}, {type: 1, id: 3, name:"Hesburger"}, {type: 1, id: 4, name:"Gaijin"}]
  },
  // en check för -1 på findindex hindrar att något som redan finns i arrayen pushas dit
  methods: {
    bookmark(type, id, name) {
      console.log(type+" "+id+" "+ name);
      if(type==0){
        if(Bookmarked.data.attractions.findIndex(attractions => attractions.id == id)==-1){
        Bookmarked.data.attractions.push({type: type, id: id, name: name});
        }
        else return;
          //DEBUG:       
      console.log(Bookmarked.data.attractions);
      }else if( type==1){
        if(Bookmarked.data.restaurants.findIndex(restaurants => restaurants.id == id)==-1){
        Bookmarked.data.restaurants.push({type: type, id: id, name: name});
      }else return;
          //DEBUG:       
      console.log(Bookmarked.data.restaurants);
      }
    },
    // OBS. att objektens 'id' parameter används för att leta upp deras index i arrayen, 
    // så det är viktigt att varje id är unikt

    // Problem: remove funktionen tar bort en medlem från arrayen även om findindex inte får någon träff
    // Jag tror det beror på att findindex returnerar -1 on false
    // UPDATE: Lade tll en check för -1 på findindex, det verkar fungera
    remove(type, id){
      console.log(type+" "+id);
      console.log(this);
      if(type==0){
        if(Bookmarked.data.attractions.findIndex(attractions => attractions.id == id)==-1) return;
        else{
        Bookmarked.data.attractions.splice(Bookmarked.data.attractions.findIndex(attractions => attractions.id == id), 1);
        //DEBUG:       
      console.log(Bookmarked.data.attractions);
        }
      }else if( type==1){
        if(Bookmarked.data.restaurants.findIndex(restaurants => restaurants.id == id)==-1) return;
        else{
        Bookmarked.data.restaurants.splice(Bookmarked.data.restaurants.findIndex(restaurant => restaurant.id == id), 1);
        //DEBUG:       
      console.log(Bookmarked.data.restaurants);
        }
      }
    },

    isbookmarked(type, id){ 
      console.log(type+" "+id);
      if(type==0){
        if(Bookmarked.data.attractions.findIndex(attractions => attractions.id == id)>=0){
          return true;
        }
        else return false;
      }else if( type==1){
        if(Bookmarked.data.restaurants.findIndex(restaurant => restaurant.id == id)>=0){
          return true;
        }
        else return false;
      }
    }

  }
};
export default Bookmarked;
