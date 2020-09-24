Vue.component('blog-post', {
    template: '<article> \
                 <h1>{{title}}</h1>  \
                 <p>{{content}}</p>  \
               </article>', 
    props: ['title','content']
});

Vue.component('taxi-button', {
     template:'<button type="submit" @click="visaEmail">Call a TAXI</button>'   
 });


var vm = new Vue ({
    el: '#app'
});