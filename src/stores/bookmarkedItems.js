
const Bookmarked = {
  data: {
    attractions: [{type: 0, id: 0, name:"Sea Life"}, {type: 0, id: 1, name:"Ateneum"}, {type: 0, id: 2, name:"Sibelius monument"}],
    restaurants: [{type: 1, id: 0, name:"Bronda"}, {type: 1, id: 1, name:"Hesburger"}, {type: 1, id: 2, name:"Gaijin"}]
  },
  methods: {
    bookmark(type, id, name) {
      console.log(type+" "+id+" "+ name);
      if(type==0){
        Bookmarked.data.attractions.push({type: type, id: id, name: name});
      }else if( type==1){
        Bookmarked.data.restaurants.push({type: type, id: id, name: name});
      }
    },
    remove(type, id){
      console.log(type+" "+id);
      if(type==0){
        Bookmarked.data.attractions.splice(Bookmarked.data.attractions.findIndex(restaurant => restaurant.id == id), 1);
      }else if( type==1){
        Bookmarked.data.restaurants.splice(Bookmarked.data.restaurants.findIndex(restaurant => restaurant.id == id), 1);
      }
    }
  }
};
export default Bookmarked;
