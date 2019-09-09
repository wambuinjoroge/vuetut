<template>
  <div class="new-quote-style">
    <p>New quote</p>
    <p>{{myQuoteTitle}}</p>
    <p>{{switchQuoteTitle()}}</p>
  </div>
</template>

<script>
    export default {
      props:{
          myQuoteTitle:{
              type:String,
              required:true
              // default:"Vee"
          }
      },
      methods:{
          switchQuoteTitle(){
              return this.myQuoteTitle.split("").reverse().join("")
          }
      }
    }
</script>

<style scoped>
  .new-quote-style {
    padding: 20px;
    /*box-shadow: 1px 1px 1px blue;*/
    background: honeydew;
    border: 1px solid;

  }
</style>
