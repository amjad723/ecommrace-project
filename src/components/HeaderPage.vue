<template>
    <div class="navbar">
        <router-link to="/HomePage">Home</router-link>
        <router-link to="AddProduct">Add Product</router-link>
        <!-- <router-link to="UpdateProduct">update Product</router-link> -->
        <!-- <router-link to="DeleteProduct">Delete Product</router-link> -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>

</template>
<script>
export default {
    name: 'HeaderPage',

    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LoginPage'})

        }
    }






}






</script>
<style>
.navbar{

    background-color: aqua;
    overflow: hidden;
    
}
.navbar a{
    text-align: center;
    padding: 15px 15px;
    text-decoration: none;
    font-size: 20px;
    margin: auto;
}
.navbar a:hover{
    color:black;
    background-color: blueviolet;

}

</style>