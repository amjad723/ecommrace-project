//import Products from './components/products.vue'
import LoginPage from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import HeaderPage from './components/HeaderPage.vue';
import AddProduct from './components/AddProduct.vue';
import UpdateProduct from './components/UpdateProduct.vue';
import DeleteProduct from './components/DeleteProduct.vue';
import {createRouter, createWebHistory } from 'vue-router';

const routes=[
    {
        name:'Header',
        component:HeaderPage,
        path:'/headerpage'
    },
    {
        name:'Home',
        component:HomePage,
        path:'/HomePage'
    }
     ,
    {
        name:'addproduct',
        component:AddProduct,
        path:'/addproduct'
    },
    {
        name:'UpdateProduct',
        component:UpdateProduct,
        path:'/UpdateProduct/:id'
    },
    {
        name:'DeleteProduct',
        component:DeleteProduct,
        path:'/DeleteProduct'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/Login'
    },
   
] 
const router=createRouter({

    history:createWebHistory(),
    routes
})
export default router