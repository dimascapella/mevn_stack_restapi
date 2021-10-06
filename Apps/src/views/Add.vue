<template>
    <div class="min-h-screen flex justify-center items-center font-mono">
        <div class="px-5 w-full md:px-0 md:w-4/12">
        <p class="text-center text-3xl font-bold">Add User Data</p>
            <form @submit.prevent="addData()">
                <div class="mt-5">
                    <label class="text-gray-900/50 text-xl">User Name</label>
                    <input type='text' class="px-3 w-full border rounded py-1 text-gray-700 focus:outline-none items-center ring" v-model="name"/>
                </div>
                <div class="mt-5">
                    <label class="text-gray-900/50 text-xl">User Email</label>
                    <input type='text' class="px-3 w-full border rounded py-1 text-gray-700 focus:outline-none items-center ring" v-model="email"/>
                </div>
                <div class="mt-5">
                    <label class="text-gray-900/50 text-xl">User Address</label>
                    <input type='text' class="px-3 w-full border rounded py-1 text-gray-700 focus:outline-none items-center ring" v-model="address"/>
                </div>
                <button class="py-2 rounded bg-blue-500 text-white font-bold mt-5 w-full">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { useRouter } from "vue-router"

export default {
    data(){
        return{
            name: '',
            email: '',
            address: '',
            router: ''
        }
    },
    mounted() {
        this.router = useRouter()
    },
    methods: {
        addData: function(){
            const data = {
                name: this.name,
                email: this.email,
                address: this.address
            }
            axios.post(`http://localhost:5000/user/`, data)
            .then(() => {
                this.router.push({
                    name: 'index'
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
}
</script>