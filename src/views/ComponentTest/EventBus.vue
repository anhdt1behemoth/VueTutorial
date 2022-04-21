<template>
<div>
    <h1>{{message}}</h1>
    <button @click="btnClick">try it</button>
</div>
</template>
<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  methods: {
    btnClick () {
      this.$emit('Click', 'xin chao ban!')
    }
  }
}
</script>
