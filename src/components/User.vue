<template>
    <div>
        <!--<button @click="changeName">Change my name</button>-->
        <!--<p>My name is {{ name }}</p>-->
        <!--<app-user-details :myName="name" @nameWasReset="name=$event" :resetFn="resetName" :myAge="age"></app-user-details>-->
        <!--<hr>-->
        <!--<br>-->
        <!--<app-user-edit :hisName="name" @nameWasEdited="name = $event" :myAge="age" @ageWasEdited="age = $event"></app-user-edit>-->
    </div>
</template>

<script>
    import userDetails from "../components/userDetails";
    import userEdit from "../components/userEdit";
    import {eventBus} from "../main";

    export default {
        data(){
            return{
                name:"Christine",
                age:23
            }
        },
        components:{
            'app-user-details' :userDetails,
            'app-user-edit' : userEdit
        },
        methods:{
            changeName(){
                this.name = "Wambui"
            },
            resetName(){
                this.name = "Christine";
            },
            created(){
                eventBus.$on("nameWasEdited",(name)=>{
                    this.name=name
                });
            }
        }
    }
    //callback function examples
    function sayHiLater() {
        let greeting = "HI";

         setTimeout(function (){
            console.log((greeting))
        },3000);
    }
    sayHiLater();

    function tellMeWhenDone(callback) {
        callback();
    }
    tellMeWhenDone(function () {
        console.log("Done");
    });
    // tellMeWhenDone(function () {
    //     alert("Done");
    // })
</script>

<style scoped>
div{
    background-color: #42b983;

}
</style>
