<template>
  <div class="new-quote-style">
    <p>New quote</p>
    <p>{{myQuoteTitle}}</p>
    <p>{{switchQuoteTitle()}}</p>
    <button class="btn" @click="resetName()">Reset Name</button>
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
          },
          resetName(){
              this.myQuoteTitle = "Love Ticks";
              this.$emit('nameWasReset',this.myQuoteTitle);
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
