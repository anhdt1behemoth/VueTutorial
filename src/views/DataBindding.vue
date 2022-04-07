<template>
<div class="content">
    <a v-bind:href="url" v-bind:target="target">{{title}}</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello Vue',
      url: 'https://v1.vuejs.org/guide/syntax.html#Binding-Expressions',
      target: '_blank'
    }
  }
}
</script>

<style>
a{
    text-decoration: none;
}
</style>
