import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue({
//     methods:{
//       changeAge(age){
//           this.$emit("ageWasEdited",age);
//       },
//       changeName(){
//           this.$emit("nameWasEdited",name);
//       }
//     }
// });
export const eventBus=new Vue({
  methods:{
    changeQuote(quote){
      this.$emit("quoteWasEdited",quote)
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})





