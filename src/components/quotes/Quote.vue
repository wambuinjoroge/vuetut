<template>
  <div class="component">
    <p class="quote-style">Here is a compilation of my new and old quotes,enjoy:</p>
    <button @click="changeQuoteTitle" class="btn btn-primary">Change quote title</button>
    <div class="row mt-3">
      <div class="col-md-6">
        <new-quote :myQuoteTitle="quoteTitle"></new-quote>
      </div>
      <div class="col-md-6">
        <old-quote></old-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import newQuote from './newQuote';
  import oldQuote from './oldQuote';

  export default {
    data:function () {
        return{
            quoteTitle: "Love Tricks"
        }
    },
    methods:{
        changeQuoteTitle(){
            this.quoteTitle = "Life Hacks"
        }
    },
    components:{
      'new-quote':newQuote,
      'old-quote':oldQuote
    }
  }
</script>

<style>
  .component {
    padding: 20px;
    /*box-shadow: 1px 1px 1px black;*/
    background: khaki;
    border: 1px solid;
  }
</style>
