<template>
      <!-- component -->
    <section class="container mx-auto p-6 font-mono">
        <router-link :to="{name: 'add'}" class="bg-blue-500 rounded px-4 py-2 text-white">Add Data</router-link>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-10">
            <div class="w-full overflow-x-auto">
            <table class="w-full overflow-hidden text-center">
                <thead>
                <tr class="text-md font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">No</th>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Email</th>
                    <th class="px-4 py-3">Address</th>
                    <th class="px-4 py-3">Action</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                    <tr v-for="(user, index) in users" :key="index" class="text-gray-700">
                        <td class="px-4 py-3 text-ms font-semibold border">{{index + 1}}</td>
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div>
                                    <p class="font-semibold text-black">{{user.name}}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-ms font-semibold border">{{user.email}}</td>
                        <td class="px-4 py-3 text-ms font-semibold border">{{user.address}}</td>
                        <td class="px-4 py-3 text-sm  border flex justify-evenly">
                            <button class="flex-1 font-bold mx-5 px-4 py-2 rounded text-red" v-on:click="destroy(user._id, index)">Delete</button>
                            <router-link :to="{name: 'detail', params:{id: user._id}}" class="flex-1 font-bold mx-5 px-4 py-2 bg-blue-500 rounded text-white">Edit</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            users: {}
        }
    },
    methods: {
        destroy: function (id, index) {
            axios.delete(`http://localhost:5000/user/${id}`)
            .then(() => {
                this.users.splice(index, 1)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        axios.get(`http://localhost:5000/user/`)
        .then((result) => {
            this.users = result.data
        }).catch((error) => {
            console.log(error)
        })
    },
}
</script>