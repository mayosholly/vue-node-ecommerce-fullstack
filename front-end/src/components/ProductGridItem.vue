<template>
    
    <div >
        <img v-bind:src="product.imageUrl" alt="">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
          <button>View Details</button>
        </router-link>
  
    </div>
  </template>
  
  <script>
  export default{
      name: 'ProductsGridItem',
      props: ['product']
  }
  
  </script>