<template>
<div id="my-page">
 <h1>{{counter}}</h1>
</div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  beforeUpdate () {
    console.log(this.counter)
  },
  created () {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

</script>
