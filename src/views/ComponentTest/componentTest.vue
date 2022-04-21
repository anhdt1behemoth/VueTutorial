<template>
    <div id="app">
  <button @click="change">Hello {{ name }}</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Tuan anh'
    }
  },
  methods: {
    change () {
      this.name = 'Torres'
    }
  }
}
</script>
