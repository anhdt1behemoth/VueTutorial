<template>
<div>
<h1>{{reverseMessage}}</h1>
<h2>{{rMessage}}</h2>
<button @click="a++">{{rBtnA}}</button>
<button @click="b++">{{rBtnB}}</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is text',
      a: 0,
      b: 0,
      number: 20
    }
  },
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join()
    },
    rMessage () {
      return this.message.toUpperCase()
    },
    rBtnA () {
      console.log('Add A')
      return this.a + this.number
    },
    rBtnB () {
      console.log('Add B')
      return this.b + this.number
    }
  }
}
</script>

<style>

</style>
