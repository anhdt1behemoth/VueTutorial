<template>
    <div ref="example-element">{{ propertyComputed }}</div>
</template>
<script>
export default {
  data () {
    return {
      property: 'Example property.'
    }
  },
  computed: {
    propertyComputed () {
      return this.proprety
    }
  },
  beforeMount () {
    console.log('At this point, this.property is now reactive and propertyComputed will update.')
    // this.property = 'Example property updated'
  }
}
</script>
