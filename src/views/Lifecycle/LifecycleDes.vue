<template>
    <div>
        <h1>Destroy</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      content: 'lifecycle Hooks'
    }
  },
  beforeMount () {
    console.log('before mount')
    console.log(this.$el.textContent)
  },
  mounted () {
    console.log('mounted')
    console.log(this.$el.textContent)
  }
}
</script>
