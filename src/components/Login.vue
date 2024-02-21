<template>
    <img class="logo" src="../assets/logo.jpg" />
    <h1>Login Page</h1>
    <div class="Loginpage">
        <input type="text" v-model="username" placeholder="enter your username" />

        <input type="password" v-model="password" placeholder="enter your password" />

        <button v-on:click="Login">Login</button>
        <p>
            <RouterLink to="/">HomePage</RouterLink>
        </p>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
            
        }
    },

    methods: {
        Login() {
             axios.post('https://dummyjson.com/auth/login', {
                username: 'kminchelle',
                password: '0lelplR',
            })
            .then(res=> {
                console.log(res.data)

                //localStorage.setItem('token','sdkdjh');
                localStorage.setItem('user-info',res.data.token);
                
                     this.$router.push({ name: "Home" });
            })               
                .catch(function (error) {
                    console.log(error);
                });
        }
              },
            mounted()
            {
let user= localStorage.getItem('user-info');
if(user){
    this.$router.push({name:'Home'})
}
            }

}
</script>

<style>
.logo {
    width: 100px;
}

.Loginpage input {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    height: 30px;
    border: 1px solid skyblue;
    border-radius: 10px;
}

.Loginpage button {
    background-color: blueviolet;
    width: 100px;
    height: 35px;
    cursor: pointer;
    border-radius: 5px;
}
</style>
