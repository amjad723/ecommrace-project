<template>
<HeaderPage />

<h1>welcome to search page</h1>
<div class="searchbar">
    <input type="text" id="Search" placeholder="serach here " v-model="searchquery" @input="searchfunction()">

    <!-- <tr>
        <td class="searchbaritems" v-for="item in products" :key="item.id">{{ }}</td>
    </tr> -->
</div>

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

        </td>
    </tr>
</table>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
import router from '@/routes';
export default {

    name: 'SearchBar',
    data() {
        return {
            searchquery: '',
            products: [],

        }
    },

    components: {
        HeaderPage
    },

    methods: {
        async searchfunction() {

            let result = await axios.get("https://dummyjson.com/products/search?q=" + this.searchquery)
             {

                this.products = result.data.products;
                if (result.status == 200) {
                   // this.loadproducts()
                     router.push({name:"SearchBar"})
                }

            }

        },

        async loadproducts() {
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
