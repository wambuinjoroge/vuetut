<template>
    <div>
        <textarea name="order" cols="30" rows="5"></textarea>
        <br>
        <br>
        <button @click="submitOrder">Add Order</button>
        <p>
            {{ order }}
        </p>

    </div>
</template>

<script>
    export default {
        data(){
            return{
              order: ""
            }
        },
        methods:{
            submitOrder(order){
              this.order = order
            }
        }
    }
</script>

<style scoped>

</style>