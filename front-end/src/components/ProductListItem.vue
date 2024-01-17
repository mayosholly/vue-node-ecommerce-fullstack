<template>
    <div>
        <img v-bind:src="product.imageUrl" alt="">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button>Remove from cart</button>
    </div>
</template>

<script>
 export default{
      name: 'ProductsListItem',
      props: ['product']
  }
  
</script>

<style>
</style>