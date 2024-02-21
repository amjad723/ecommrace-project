<template>
    <HeaderPage/>
    <h1>Update product page</h1>
    <form>
    <input type="text" placeholder="product title" v-model="products.title" name="title" /> <br><br>
    <input type="text" placeholder="product brand" v-model="products.brand" name="brand" /><br><br>
    <input type="number" placeholder="product price" v-model="products.price" name="price" /><br><br>
    <input type="text" placeholder="product category" v-model="products.category" name="category" /><br><br>
    <input type="text" placeholder="product description" v-model="products.description" name="description" /><br><br>
    <input type="number" placeholder="product stock" v-model="products.stock" name="stock" /><br><br>
    <input type="number" placeholder="product rating" v-model="products.rating" name="rating" /><br><br>

    <button type="button" v-on:click="updateproduct">Update product</button>
   

</form>
    
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import router from '@/routes';
import axios from 'axios';
export default{
    name:"UpdateProduct",
    components:{
        HeaderPage
    },
    data() {
        return {
            products:{
                title: "",
                brand: "",
                category: "",
                description: "",
                price: "",
                rating: "",
                stock: "",
            }
            
        }

    },
    methods:{
      async  updateproduct(){
           // console.warn("function called",this.products)
        
            const result = await axios.put("https://dummyjson.com/products/"+this.$route.params.id, 
            {
               
               title: this.products.title,
                discription: this.products.description,
                price: this.products.price,
                category: this.products.category,
                brand: this.products.brand,
                rating: this.products.rating,
                stock: this.products.stock,
                 });
     
                 if(result.status==200)
                 {
                     router.push({ name:"Home"})
                 }
        
        
        
        
        }
    },
   async mounted(){

    const result= await axios.get("https://dummyjson.com/products/"+this.$route.params.id)
       // console.log(this.$route.params.id)
//console.log(result.data)
this.products=result.data
    }

}
</script>
<style>

</style>