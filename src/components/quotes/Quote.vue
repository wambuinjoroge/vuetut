<template>
  <div class="component">
    <p class="quote-style">Here is a compilation of my new and edit quotes,enjoy:</p>
    <button @click="changeQuoteTitle" class="btn btn-danger">Change quote title</button>
   <div class="mt-2">
     <p>{{quoteTitle}}</p>
     <p>{{newQuote}}</p>
   </div>
    <div class="row mt-3">
      <div class="col-md-6">
        <new-quote
          :myQuoteTitle="quoteTitle"
          @nameWasReset="quoteTitle=$event"
          :resetFn="resetName"
          :resetQuoteFn="resetQuote"
          :editQuote="newQuote">
        </new-quote>
      </div>
      <div class="col-md-6">
        <edit-quote
          :editQuote="newQuote"
          :editQuoteFn="editQuoteCall"
          @quoteWasEdited="newQuote=$event">
        </edit-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import newQuote from './newQuote';
  import editQuote from './editQuote';

  export default {
    data:function () {
        return{
            quoteTitle: "Love Tricks",
            newQuote:"Kiki"
        }
    },
    methods:{
        changeQuoteTitle(){
            this.quoteTitle = "Life Hacks"
        },
        resetName(){
            this.quoteTitle = "Love Tricks";
        },
        editQuoteCall(){
            this.newQuote = "Back Kicks";
        },
        resetQuote(){
            this.newQuote = "Kiki";
        }
    },
    components:{
      'new-quote':newQuote,
      'edit-quote':editQuote
    }
  }
</script>

<style>
  .component {
    padding: 20px;
    background: oldlace;
    border: 1px solid;
  }
</style>
