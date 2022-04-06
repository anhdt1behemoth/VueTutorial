<template>
<div>
<button @click="onBtn()">try it:{{count}}</button>
  <button @click="toggle()">Try it</button>
  <h1 v-if="awesome">Hello Vue</h1>
  <h1 v-else>OH No!</h1>
  <button @click="a++">{{rBtnA()}}</button>
  <button @click="b++">{{rBtnB()}}</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is my first component using binding data',
      count: 0,
      awesome: 'Hello Vue',
      a: 0,
      b: 0,
      number: 20
    }
  },
  methods: {
    onBtn () {
      this.count++
    },
    toggle () {
      this.awesome = !this.awesome
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
