<template>
  <div id="app">
    <section class="Header">
      <h1 id="Fruiticious!">Fruiticious!</h1>
      <!-- Cart component -->
      <shop-cart :cart="this.cart" :total="this.total" @empty-cart="emptyCart">
      </shop-cart>
    </section>
    <!-- Item component -->
    <shop-item v-for="item in this.items" :item="item" :key="item.id" @update-cart="updateCart">
    </shop-item>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        items: [
          { id: 205, name: 'Banana', price: 1, imageSrc: Banana },
          { id: 148, name: 'Orange', price: 2, imageSrc: Orange },
          { id: 248, name: 'Apple', price: 1, imageSrc: Apple }
        ],
        cart: [],
        total: 0
      }
    },
    methods: {
      updateCart(e) {
        this.cart.push(e);
        this.total = this.shoppingCartTotal;
      },
      emptyCart() {
        this.cart = [];
        this.total = 0;
      }
    },
  }
</script>
