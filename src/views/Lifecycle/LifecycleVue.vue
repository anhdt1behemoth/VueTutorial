<template>
    <div>
        <h1>Home LifeCycle</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      property: 'Blank'
    }
  },
  computed: {
    propertyComputed () {
      console.log('I change when this.property changes.')
      return this.property
    }
  },
  created () {
    this.property = 'Example property update'
    console.log('propertyComputed will update,as this.property is now reactive.')
  }
}
</script>
