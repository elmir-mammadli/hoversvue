<template>
    <div class=" py-[60px]" id="clients">
      <div class="mx-auto max-w-7xl">
            <h1 class="text-[28px] font-bold tracking-tight pb-[60px]">{{ $t('clients.heading') }}</h1>
            <div class="relative max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-[60px]">
                <img class="w-[150px] cursor-pointer grayscale-[95%] transition-all hover:grayscale-0 rounded-sm" v-for="clientImg in clientImgs" :src="clientImg" :key="clientImg">
            </div>
      </div>
      </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
        return {
            clientImgs: []
        };
    },
        mounted() {
            axios.get('/src/assets/images.json')
            .then(response => {
                this.clientImgs = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

  </script>