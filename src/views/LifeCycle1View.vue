<template>
  <div id="my-counter">
      <h1>this is LifeCycle1</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  updated () {
    console.log(+this.$refs['my-counter'].textContent === this.counter)
  },
  created () {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  destroyed () {
    // Destroy thư viện của bên thứ 3
  }
}
</script>

<style>

</style>
