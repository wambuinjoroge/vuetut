<template>
  <div class="edit-quote-style">
    <p>New Quote:{{editQuote}}</p>
    <button class="btn mb-3" @click="getNewQuote" >Click to edit with an event listener</button>
    <button class="btn" @click="editQuoteFn()">Click to edit with a callback fn</button>
  </div>
</template>

<script>
    import { eventBus } from '../../main';
    export default {
        // props:['editQuote'],
        props:{
            editQuote:String,
            editQuoteFn:Function,
        },
        methods:{
            getNewQuote(){
                this.editQuote = "Back Kicks";
                // this.$emit('quoteWasEdited',this.editQuote);
                // eventBus.$emit('quoteWasEdited',this.editQuote);
                eventBus.changeQuote(this.editQuote);
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
