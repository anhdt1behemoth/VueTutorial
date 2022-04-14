<template>
    <div class="my-component">
        <h1>{{ message }}</h1>
        <div><button @click="changeMessage">Try It</button></div>
        <button @click="$router.push('/watcher1')">Next</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'This is my first component using binding data'
    }
  },
  methods: {
    changeMessage () {
      this.message = 'This is new message'
    }
  },
  watch: {
    message () {
      console.log('message changed')
    }
  }
}
</script>
