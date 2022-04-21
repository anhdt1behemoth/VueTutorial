<template>
    <div class="my-component">
        <h1>{{ message.text }}</h1>
        <div><button @click="changeMessage">Try It</button></div>
        <h1>Watcher</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: {
        type: 'greeting',
        text: 'How are you?'
      }
    }
  },
  methods: {
    changeMessage () {
      this.message.text = 'this is new message'
    }
  },
  watch: {
    message: {
      handler: function () {
        console.log('something changed')
      },
      deep: true
    }
  }
}
</script>
