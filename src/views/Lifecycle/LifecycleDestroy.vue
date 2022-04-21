<template>
    <div>
        <h1>Destroys lifecycle</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      content: 'lifecycle Hooks'
    }
  },
  beforeDestroy () {
    this.content = null
    delete this.content
  },
  destroyed () {
    console.log(this)
  }
}
</script>
