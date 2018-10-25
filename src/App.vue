<template>
  <div id="app">
    <!--<user></user>-->
    <order-header :orderCount="orders.length" :maxCount="maxCount"></order-header>
    <order :orders="orders" @orderRemoved="orderOut">{{ order }}</order>
    <new-order @newOrderIn="newOrder"></new-order>

    <br/>
    <br/>

    <div class="alert alert-primary">
      Info: Click on an order to delete it
    </div>

  </div>
</template>

<script>
  // import User from "./components/User";
  import orderHeader from "./components/orders/Header";
  import Order from "./components/orders/Order";
  import newOrder from "./components/orders/newOrder";

export default {
  components:{
    // 'user' :User,
    'order-header':orderHeader,
    'order':Order,
    'new-order':newOrder

  },
  name:'app',
    data()
    {
        return{
            orders:
              [
                 'Reese Wither-Spoon',
                 'Wimbledon Kasarani'
               ],
            maxCount: 5
        }
    },
    methods:{
      newOrder(order){
          this.orders.push(order);
      },
      orderOut(index){
         this.orders.splice(index, 1);
         alert("Order Is Out")
      }
  }
}
</script>


<style>

#app {
  font-family: 'cursive', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

</style>
