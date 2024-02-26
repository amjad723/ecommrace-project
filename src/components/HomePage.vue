<template>
<HeaderPage />
<!-- <h1>{{firstName}} welcome to Home page</h1> -->
<h1>welcome to Home page</h1>
<table class="maintable">
    <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Brand</td>
        <td>description</td>
        <td>Actions</td>
    </tr>

    <tr v-for="item in products" :key="item.id">
        <td> {{ item.id }} </td>
        <td> {{ item.brand }} </td>
        <td> {{ item.title }} </td>
        <td> {{ item.description }} </td>
        <td>
            <router-link :to="'/UpdateProduct/'+item.id">Update</router-link>
            <button v-on:click="deleteproducts(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
//import { VueElement } from 'vue';
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name: "HomePage",
    data() {
        return {

            products: [],

        }
    },

    components: {
        HeaderPage
    },
    methods: {
        async deleteproducts(id)
         {
            let result = await axios.get("https://dummyjson.com/products/" + id);
            if(result.status==200)
            {
                this.loadproducts()

            }

        },
      async  loadproducts(){
            let result = await axios.get("https://dummyjson.com/products");
        console.log(result)
        this.products = result.data.products
        }
    },
     mounted() {

       this.loadproducts()

    }
}
</script>

<style>
.maintable {
    border: 2px solid black;
    width: auto;
    height: auto;
}

td {
    border: 1px solid black;
}
</style>
