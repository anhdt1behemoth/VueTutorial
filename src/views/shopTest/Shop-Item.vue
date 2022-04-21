<template>
    <div class="Item">
        <img src="item.imageSrc" alt="item.name" class="ItemImage">
        <div class="ItemsDetails">
            <p><strong>{{ item.name }}</strong></p>
            <p>Price: <strong>${{item.price}}</strong></p>
        </div>
        <button class="Button" @click="addToCart(item)">Add To Cart</button>
    </div>
</template>
<script>
export default {
  name: 'Shop-Item',
  props: ['item'],
  data () {
    return {}
  },
  methods: {
    addToCart (item) {
      this.$emit('update-cart', item)
    }
  }
}
</script>
