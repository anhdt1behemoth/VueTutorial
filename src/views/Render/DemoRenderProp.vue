<template>
    <div>
        <RenderProp :render="renderH1" />
        <RenderProp :render="renderP" />
    </div>
</template>

<script>
import RenderProp from '../Render/RenderProp.vue'
export default {
    components: {
        RenderProp
    },
    methods: {
        renderH1 (count) {
            return (
                `<h1>h1 Counter: ${ count }`
            )
        },
        renderP (count) {
            return (
                `<p> p Couter: ${ count }`
            )
        }
    }
}
</script>