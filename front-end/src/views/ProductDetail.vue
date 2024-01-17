<template>
 <h1>Product Detail</h1>
 <div v-if="product">

 <img v-bind:src="product.imageUrl" alt="">
  <p>{{ product.name }}</p>
  <p>${{ product.price }}</p>
  <p>Average Rating: {{ product.averageRating }}</p>
  <button>Add to Cart</button>
  <p>{{ product.description  }}</p>
  </div>
  <NotFoundPage v-else />
</template>

<script>
// @ is an alias to /src
import { products } from '../fake-data'
import NotFoundPage from './NotFoundPage.vue';

export default {
  name : 'ProductDetail',
  data(){
    return {
      product: products.find((p) => p.id === this.$route.params.id)
    }
  },
  components: { NotFoundPage }

}
</script>

<style scoped>
h1 {
  color: red
}
</style>