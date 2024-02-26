<template>
    <h1>Sign up page</h1>
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{ item }} not valid

        </li>
    </ul>
    <form @submit.prevent="signup">
        <label>Name :</label>
        <input type="text" v-model="form.Name" placeholder="enter Name" required>
        <br><br>
        <label>Email :</label>
        <input type="email" v-model="form.Email" @change="validateemail()" placeholder="Enter  Email address" required>
        <br><br>
        <label>Password:</label>
        <input type="password" v-model="form.Password" @change="validatepassword()" placeholder="Enter password" minlength="8"  required>
        <br><br>
        <button @click="signup()" type="button">SignUp</button>
    </form>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                Name: '',
                Email: '',
                Password: '',
            },
            error: [],
        }
    },
    methods: {
        validateemail() {
            let email = this.form.Email;
            let atpos = email.indexOf('@');
           let dotpos = email.lastIndexOf('.');
            if (atpos < 1 || (dotpos - atpos < 2)) {
                alert("Please enter correct email ID")
            }
        },
        validatepassword(){
            let password = this.form.Password
            if(password.length<=7 ){
            alert("password length must be 8 ")
            }
        },
       
        signup() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] == '' || this.form[item].length == 0) {
                    this.error.push(item)
                }
            }

            if (this.error.length == 0) {
                alert("data submitted")
            }
            console.log(this.form, this.error)
        }
    }



}
</script>