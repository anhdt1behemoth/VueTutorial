<template>
    <div>
        <input placeholder="Enter Text Here " v-model="tempMessage"/>
        <div><button @click="sendMessage">Emit Data</button></div>
    </div>
</template>

<script>
import EventBus from './EventBus.vue'
export default {
    name: "ComponentFirst",
    data () {
        return {
            tempMessage: ''
        }
    },
    methods: {
        sendMessage () {
            EventBus.$emit('inputData', this.tempMessage)
            this.tempMessage = '';
        }
    }
}
</script>