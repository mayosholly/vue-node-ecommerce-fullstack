<template>
    <div v-if="products.length > 0">
        <ProductListItem v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"
        />
    </div>
    <p v-else>You do not have any product in your Cart</p>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
export default{
    name: 'ProductGrid',
    props: ['products'],
    components: {
        ProductListItem
    }
}
</script>