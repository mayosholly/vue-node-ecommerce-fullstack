<template>
    <div>
    <ProductList v-bind:products="cartItems" />
    <h3>Total: ${{ totalPrice }}</h3>
    <button> Process to Checkout</button>
  </div>
   </template>
   
   <script>
   // @ is an alias to /src
   import { cartItems } from '@/fake-data';
   import ProductList from '@/components/ProductList.vue';
   export default {
     name : 'CartPage',
     data() {
      return{
        cartItems
      }
     },
     components:{
      ProductList
     },
     computed: {
      totalPrice() {
        return this.cartItems.reduce(
          (sum, item) => sum + Number(item.price),
          0
        )
      }
     }
   }
   </script>
   
   <style scoped>
   h1 {
     color: red
   }
   </style>