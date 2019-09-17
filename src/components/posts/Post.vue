<template>
<new-post>
  <p slot="title">The future of Mobidev Kenya</p>
  <h1>{{title}}</h1>
</new-post>
</template>

<script>
  import newPost from '../../components/posts/newPost';

  export default
  {
      name: "Post",
      components:{
          "new-post":newPost
      },
      data(){
          return{
             title:"Hello World"
          }
      }
  }
</script>

<style scoped>
p{
  /*font-family: "DejaVu Sans";*/
}
</style>
