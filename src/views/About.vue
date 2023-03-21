<template>

    <div class="max-w-6xl shadow-xl mx-auto flex flex-col items-center rounded-xl bg-white py-10 my-20">
        <h1 class="text-center font-bold tracking-tighter text-5xl ">{{ $t(isEn ? 'about.about-us': 'about.about-in') }}</h1>
        <div class="flex gap-[2rem] mt-[60px]">
        <p :class="isEn ? 'tracking-tight' : 'tracking-normal'" class="max-w-lg 
        text-justify 
        text-hovers-gray 
        leading-6 
        border-l-4 
        pl-4 
        border-red-500
        ">
        <span class="
        text-hovers-black 
        font-semibold">{{ $t('about.bold-text') }}</span> {{ $t('about.perex-1') }}</p>
        <img src="/public/images/about1.jpeg" class="h-[300px] w-[450px] rounded-md rotate-1 drop-shadow-xl" alt="">
        </div>
        <div class="flex gap-[2rem] mt-10">
        <img src="/public/images/about2.jpeg" class="h-[300px] w-[450px] rounded-md -rotate-1 drop-shadow-xl" alt="">
        <p class="max-w-lg text-justify text-hovers-gray leading-6 tracking-tight">
            {{ $t('about.perex-2') }}
        </p>
        </div>
        <div class="flex gap-[2rem] mt-10">
        <p class="max-w-lg text-justify text-hovers-gray leading-6 tracking-tight">{{ $t('about.perex-3') }}</p>
        <img src="/public/images/about3.jpeg" class="h-[300px] w-[450px] rounded-md rotate-1 drop-shadow-xl" alt="">
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import i18n from '../i18n';
const isEn = computed(() => i18n.global.locale === 'en')
</script>