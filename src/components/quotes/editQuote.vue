<template>
  <div class="edit-quote-style">
    <p>New Quote:{{newQuote}}</p>
    <button class="btn" @click="editQuote">Click to edit</button>
  </div>
</template>

<script>
    export default {
        props:['editQuote'],
        methods:{
            editQuote(){
                this.newQuote = "Backs"
            }
        }
    }
</script>

<style scoped>
  .edit-quote-style {
    padding: 20px;
    background: chocolate;
    border: 1px solid;

  }
</style>
