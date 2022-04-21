<template>
    <div>
        <h1>Create Lifecycle</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      content: 'lifecycle Hooks'
    }
  },
  beforeCreate () {
    console.log('before create')
    console.log(this.content)
  },
  created () {
    console.log('created')
    console.log(this.content)
  }
}
</script>
