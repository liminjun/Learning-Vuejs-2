<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import {mapActions} from 'vuex'

export default {
  computed: {
    
    //使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters({
      products: 'cartProducts',
      //映射 this.checkoutStatus为store.getters.checkoutStatus
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      //使用this.$store.dispatch('xxx')分发action
      this.$store.dispatch('checkout', products)
    }
  }
}
</script>
