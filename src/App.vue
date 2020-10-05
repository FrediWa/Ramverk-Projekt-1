<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.go-back-button{
  font-size: 2em;
  color: #FFF;
  display: flex;
  justify-content: flex-start;
  line-height: 50px;
}
.go-back-button::before{
  content: '';
  border: 15px solid #fff;
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  margin: 10px;
}
button.butt{
  margin-top: 10px;
  text-align: center;
  background-color: white;
  border-style: solid; 
  border:grey,1px;
  border-radius: 9px;
  width: 12vh;
  height: 12vh;
  padding: 0px;
  margin-right: 2px;
}
</style>
