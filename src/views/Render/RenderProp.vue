<template>
    <div v-html="render(count)"></div>
</template>

<script>
export default {
  props: {
    render: {
      type: Function
    }
  },
  data () {
    return {
      count: 0
    }
  },
  beforeMount () {
    this.$options.counter = setInterval(() => {
      this.count += 1
    }, 1000)
    this.$on('hook:beforeDestroy', () => {
      clearInterval(this.$options.counter)
    })
  }
}
</script>
