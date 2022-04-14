<template>
    <div class="hello">
        <h1>{{ message }}</h1>
        <button @click="passData">pass data to parent</button>
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
    passData () {
      this.$emit('pass', 12341341234)
    }
  }
}
</script>
