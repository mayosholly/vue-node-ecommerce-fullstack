<template>

 <div>
  <ProductGrid v-bind:products="products"
  />
 </div>

 </template>
 
 <script>
 // @ is an alias to /src
 
import { products } from '../fake-data';
import ProductGrid from '@/components/ProductGrid.vue';
 export default {
    name: "ProductPage",
    data() {
        return {
            products
        };
    },
    components: {
      ProductGrid
    }
}
 </script>
 
 <style scoped>
 h1 {
   color: red
 }
 </style>