<template>
    <div>
        <h1>Destroy</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      someLeakyProperty: 'I leak memory if not cleaned up!'
    }
  },
  beforeDestroy () {
    this.someLeakyProperty = null
    delete this.someLeakyProperty
  }
}
</script>
