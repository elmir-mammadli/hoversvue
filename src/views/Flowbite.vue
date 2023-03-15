<template>
    <div class="flex flex-row justify-center rounded-lg cursor-pointer mt-10 items-center mx-auto bg-red-400 max-w-[375px]">
        <h1 class="py-[20px]">{{ msg }}</h1>
    </div>
</template>
<script setup>

defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>