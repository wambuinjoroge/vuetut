<template>
  <div id="app">
    <img src="./assets/meeeee.jpg" style="width: 200px">
    <h1>{{ msg }}</h1>
    <order-in></order-in>
    <order-out><p></p></order-out>
    <user></user>

  </div>
</template>

<script>
  import User from "./components/User";
  import orderIn from "./components/orders/orderIn";
  import orderOut from "./components/orders/orderOut";

export default {
  components:{
    'user' :User,
    'orderIn':orderIn,
    'orderOut':orderOut
  },
  name:'app',
  data () {
    return {
      msg: 'Tina Chill N Grill',
    }
  },

}
</script>

<style>
#app {
  font-family: 'padmaa', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

h1{
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
