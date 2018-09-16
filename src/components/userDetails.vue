<template>
    <div>
        <h5>You may view details here</h5>
        <p>My name is {{ myName }} and my age is {{ myAge }}</p>
        <p>When you switch up my name, you get ( {{ switchName( ) }} ) </p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    // props property details from outside
    import {eventBus} from "../main";

    export default {
        props: {
            myName: {
                type:String
                // required: true,
                // default: "MAX"
            },
            resetFn: Function,
            myAge: Number
        },
        methods:{
            switchName(){
                return this.myName.split("").reverse().join();
            },
            resetName(){
                this.myName = "Christine";
                // this.$emit("nameWasReset",this.myName);
                eventBus.changeName(this.myName);
            }
        },
        created(){
            //create a listen event
            eventBus.$on("ageWasEdited",(age)=>{
                this.myAge=age;
            });
        }
    }
</script>

<style scoped>
div{
    background-color: lightskyblue;
}
</style>