<template>
  <div class="new-quote-style">
    <p>New quote:{{editQuote}}</p>
    <p>{{switchQuoteTitle()}}</p>
    <button class="btn mb-3" @click="resetFn()">Reset Name</button>
    <button class="btn mb-3" @click="resetName()">Reset Name</button>
    <button class="btn" @click="resetQuoteFn()">Click to reset with a callback fn</button>
  </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
      props:{
          myQuoteTitle:{
              type:String,
              required:true
              // default:"Vee"
          },
          resetFn:Function,
          editQuote:String,
          resetQuoteFn:Function
      },
      methods:{
          switchQuoteTitle(){
              return this.myQuoteTitle.split("").reverse().join("")
          },
          resetName(){
              this.myQuoteTitle = "Love Ticks";
              this.$emit('nameWasReset',this.myQuoteTitle);
          }
      },
      created() {
          //event listener
          eventBus.$on('quoteWasEdited',(quote)=>{
              this.editQuote=quote
          })
      }
    }
</script>

<style scoped>
  .new-quote-style {
    padding: 20px;
    background: palegoldenrod;
    border: 1px solid;

  }
</style>
