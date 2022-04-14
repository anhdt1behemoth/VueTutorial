<template>
<div>
    <button @click="mutateDeeply">Button</button>
    <button @click="$router.push('/lifecycleC')">Next</button>
    <button @click="$router.push('/lifecycle1view')">NextLife</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    mutateDeeply (event) {
      alert(`Hello${this.name}`)
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>
