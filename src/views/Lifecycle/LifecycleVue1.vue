<template>
  <div id="my-counter" ref="example-element">
      <h1>{{ counter }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  created () {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  beforeUpdate () {
    console.log('As this point, Virtual DOM has not re - rendered or pathched yet.')
    console.log(+this.$refs['example-element'].textContent === this.counter)
  }
}
</script>

<style>

</style>
