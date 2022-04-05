<template>
<div id="appVue">
    {{counter}}
</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello world',
      counter: 0
    }
  },
  beforeCreate () {
    console.log(this.message)
  },
  //
  created () {
  // Gọi API, Call Ajax
    console.log(document.getElementById('appVue').innerHTML)
  },
  beforeMount () {
    console.log(this)
    console.log(document.getElementById('appVue').innerHTML)
  },
  mounted () {
  // Nếu muốn sử dụng Jquery -> chỉ truy xuất DOM được trong mounted -> có thể sử dụng Jquery
    console.log(this.$el)
    console.log(document.getElementById('appVue').innerHTML)
  }
}
</script>
