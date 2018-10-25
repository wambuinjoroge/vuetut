<template>
    <div>
        <form>
            <div class="form-group">
                 <textarea class="form-control" v-model="order"></textarea>
            </div>
            <button class="btn btn-primary" @click.prevent="createNewOrder">Add Order</button>
        </form>
    </div>
</template>

<script>
    export default {
       data(){
          return{
              order:''
          }
        },
       methods:{
            createNewOrder(){
              this.$emit("newOrderIn",this.order);
              this.order = '';
            }
        }
    }
</script>

<style scoped>

</style>