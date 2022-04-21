<template>
  <div id="test">
    <h1>
      <EventBus :message="message" @Click="save"/>
    </h1>
  </div>
</template>
<script>
import EventBus from '../ComponentTest/EventBus.vue'
export default {
  components: {
    EventBus
  },
  data () {
    return {
      message: 'xin chao'
    }
  },
  methods: {
    save (pramas) {
      alert(pramas)
    }
  }
}
</script>
