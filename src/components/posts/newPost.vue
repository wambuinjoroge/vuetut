<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "newPost"
    }
</script>

<style scoped>
p{
  font-weight: bold;
}
</style>
