<template>
  <div class="container mt-4" id="app">
    <!--<user></user>-->
<!--    <order-header :orderCount="orders.length" :maxCount="maxCount"></order-header>-->
<!--    <order :orders="orders" @orderRemoved="orderOut">{{ order }}</order>-->
<!--    <new-order @newOrderIn="newOrder"></new-order>-->
<!--    <div class="alert alert-primary mt-4">-->
<!--      Info: Click on an order to delete it-->
<!--    </div>-->

<!--    <quote></quote>-->
    <post></post>


  </div>
</template>

<script>
  // import User from "./components/User";
  import orderHeader from "./components/orders/Header";
  import Order from "./components/orders/Order";
  import newOrder from "./components/orders/newOrder";
  //quotes
  // import Quote from "./components/quotes/Quote";
  import Post from "./components/posts/Post";


export default {
  components:{
    // 'user' :User,
    // 'order-header':orderHeader,
    // 'order':Order,
    // 'new-order':newOrder,
    // //quotes
    // 'quote':Quote,
//  posts
    "post":Post

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
          if (this.order.length > this.maxCount){
             return alert('sdfer');
          }
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

}

</style>
