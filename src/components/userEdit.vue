<template>
    <div>
        <button @click = "changeName">
            Click to edit name
        </button>
        <button @click = "editAge">
            Click to edit age
        </button>
        <p>{{ hisName }} and my age is {{ myAge }}</p>
    </div>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        props:{
          hisName:{
              type:String
          },
          myAge: Number
        },
        methods:{
            changeName(){
                this.hisName = "Wambui";
                this.$emit("nameWasEdited",this.hisName)
            }
            ,
            editAge(){
                this.myAge = "29";
                // this.$emit("ageWasEdited",this.myAge);
                // eventBus.$emit("ageWasEdited",this.myAge);
                eventBus.changeAge(this.myAge);
             }
        }
    }
</script>

<style scoped>
    div{
        background-color: #42b983;
    }
</style>