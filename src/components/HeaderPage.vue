<template>
<div class="navbar">
    <router-link to="/HomePage">Home</router-link>
    <router-link to="AddProduct">Add Product</router-link>
    <router-link to="SearchBar">Search</router-link>
       <router-link to="SignUp"> SignUp</router-link>
       <router-link to="ArrayList">ArrayList</router-link> 
    <a v-on:click="logout" href="#">Logout</a>
</div>


</template>

<script>
import axios from 'axios';
//import router from '@/routes';
export default {
    name: 'HeaderPage',
    data() {
        return {
            
            products: []
        }
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'LoginPage'
            })

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

<style>
.navbar {

    background-color: aqua;
    overflow: hidden;

}

.navbar a {
    text-align: center;
    padding: 15px 15px;
    text-decoration: none;
    font-size: 20px;
    margin: auto;
}

.navbar a:hover {
    color: black;
    background-color: blueviolet;

}
</style>
