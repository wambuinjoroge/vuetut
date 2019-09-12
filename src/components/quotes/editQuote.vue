<template>
  <div class="edit-quote-style">
    <p>New Quote:{{editQuote}}</p>
    <button class="btn" @click="getNewQuote">Click to edit</button>
  </div>
</template>

<script>
    export default {
        props:['editQuote'],
        methods:{
            getNewQuote(){
                this.editQuote = "Back Kicks"
            }
        }
    }
</script>

<style scoped>
  .edit-quote-style {
    padding: 20px;
    background: peachpuff;
    border: 1px solid;

  }
</style>
