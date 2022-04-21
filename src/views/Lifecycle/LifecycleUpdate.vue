<template>
    <div>
        <h1>Lifecycle Update</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
      update: ''
    }
  },
  beforeUpdate () {
    alert(this.update)
  }
}
</script>
