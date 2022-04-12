<template>
    
</template>

<script>
import sourceData from '@/data.json'
export default {
    data () {
        return {
            destination: null
        }
    },
    computed: {
        destinationId () {
            return parseInt(this.$route.params.id)
        },
    },
   async created () {
     const response =  await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
     this.destination = await response.json()
    }

}
</script>