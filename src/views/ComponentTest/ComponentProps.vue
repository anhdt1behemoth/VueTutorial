<template>
    <div id="app">
        <HelloWorld :message="message" @pass="saveData" />
    </div>
</template>

<script>
import HelloWorld from '../ComponentTest/HelloVue.vue'
export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      message: 'Xin chao tat ca moi nguoi'
    }
  },
  methods: {
    saveData (params) {
      alert(params)
    }
  }
}
</script>
