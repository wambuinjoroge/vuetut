<template>
    <div class="container-fluid">
        <div class="row mt-4 mb-4 ">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <order-in v-for="(order,index) in orders"  @click.native="removeOrder(index)">{{ order }}</order-in>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
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
