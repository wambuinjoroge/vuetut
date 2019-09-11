<template>
  <div class="new-quote-style">
    <p>New quote</p>
    <p>{{newQuote}}</p>
    <p>{{switchQuoteTitle()}}</p>
    <button class="btn" @click="resetFn()">Reset Name</button>
<!--    <button class="btn" @click="resetName()">Reset Name</button>-->
  </div>
</template>

<script>
    export default {
      props:{
          myQuoteTitle:{
              type:String,
              required:true
              // default:"Vee"
          },
          resetFn:Function,
          newQuote:String
      },
      methods:{
          switchQuoteTitle(){
              return this.myQuoteTitle.split("").reverse().join("")
          },
          // resetName(){
          //     this.myQuoteTitle = "Love Ticks";
          //     this.$emit('nameWasReset',this.myQuoteTitle);
          // }
      }
    }
</script>

<style scoped>
  .new-quote-style {
    padding: 20px;
    background: forestgreen;
    border: 1px solid;

  }
</style>
