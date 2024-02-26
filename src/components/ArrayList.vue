<template>
    <div class="hello">
        <h2>This website will give you the sum of Array,Smallest no in Array And Greatest Number in Array</h2>
        <p>list of Array:{{ allnumbers }}</p>
    </div>
    <div>
        <input type="number" v-model.number="inputnumber" @keyup.enter="puttinginarray" placeholder="Enter numbers">
    
        <button @click="puttinginarray">Enter Number</button>
        <br><br>
        <p>Sum of Array:{{ sumofallnumbers }}</p>
        
        <p>largest number of array is:{{ largestnumber }}</p>
        
        <p>Smallest number of array is:{{ smallestnumber }}</p>
    </div>
    </template>
    
    <script>
    export default {
        name: 'ArrayList',
        data() {
            return {
                inputnumber: 0,
                allnumbers: [],
    
            }
    
        },
        methods: {
            puttinginarray() {
                this.allnumbers.push(this.inputnumber);
    
            }
        },
        computed: {
            sumofallnumbers() {
                // Use the Array.reduce method to calculate the sum
                return this.allnumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            },
    
            largestnumber() {
    
                if (this.allnumbers.length > 0) {
                    return Math.max(...this.allnumbers);
                } else {
                    return 'Array is empty';
                }
            },
            smallestnumber() {
                if (this.allnumbers.length > 0) {
                    return Math.min(...this.allnumbers);
                } else {
                    return 'Array is empty';
                }
            },
          }
        }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    
    <style scoped>
    h3 {
        margin: 40px 0 0;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    </style>
    