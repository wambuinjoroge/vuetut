<template>
    <div>
       <order-in v-for="(order,index) in orders"  @click.native="removeOrder(index)">{{ order }}</order-in>
    </div>
</template>

<script>
    import orderIn from "../../components/orders/orderIn";

    export default {
     props:
        [
          'orders'
        ],
     components:
        {
            "order-in":orderIn,
        },
     methods:
        {
            removeOrder(index){
                this.$emit('orderRemoved',index);
            }
        }
    }
</script>

<style scoped>

</style>
