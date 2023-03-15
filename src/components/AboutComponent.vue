<template>
  <div class="flex justify-center gap-[50px] mx-auto mt-[60px]">
    <h1 class="text-[36px] font-bold mt-6">Who We Are?</h1>
    <div class="border-r border-x-2"></div>
    <p class="max-w-xl text-[#777777]">
        <span class="font-semibold">
          {{ $t('about.boldText') }}
    </span>
    {{ $t('about.regularText') }}
  <button class="bg-red-600 rounded-[30px] mt-2 px-3 py-1">
    <a href="/company" class="text-white text-md font-light">Read More</a>
  </button> 
  </p>
  </div>
</template>

<script>
export default {
    name: "AboutComponent"
}
</script>

<style>

</style>