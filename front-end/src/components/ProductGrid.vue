<template>
    <div>
        <ProductGridItem v-for="product in products"
            v-bind:key="product.id"
            v-bind:product="product"
        />
    </div>
</template>


<script>
import ProductGridItem from './ProductGridItem.vue';
export default{
    name: 'ProductGrid',
    props: ['products'],
    components: {
        ProductGridItem
    }
}

</script>