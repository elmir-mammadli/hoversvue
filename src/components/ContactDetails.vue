<template>
  <div class="max-w-xl shadow-2xl rounded-xl isolate bg-white px-8 py-7">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      </div>
      <div class="mx-auto max-w-lg flex flex-col flex-wrap text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ $t('contacts.subheader') }}</h2>
        <div class="my-5">
            <ul class="flex flex-row py-5 gap-5 justify-start items-center">
            <li class="border rounded-full border-gray-200 p-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-phone" size="xl" /></a></li>
            <li>
                <ul class="flex flex-col justify-start items-start">
                 <li class="font-semibold text-lg text-black">{{ $t('contacts.phone') }}</li>     
                 <li class="font-regular text-lg text-gray-700"><a href="tel:+994505939300">+99450 593 93 00</a></li>     
                </ul>
            </li>
        </ul>
        <ul class="flex flex-row py-5 gap-5 justify-start items-center">
            <li class="border rounded-full border-gray-200 px-4 py-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-envelope" size="xl" /></a></li>
            <li>
                <ul class="flex flex-col justify-start items-start">
                 <li class="font-semibold text-lg text-black">{{ $t('contacts.email') }}</li>     
                 <li class="font-regular text-lg text-gray-700"><a href="mailto:info@hoversgroup.net">info@hoversgroup.net</a></li>     
                </ul>
            </li>
        </ul>
        <ul class="flex flex-row pt-5 gap-5 justify-start items-center">
            <li class="border rounded-full border-gray-200 px-5 py-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-location-dot" size="xl" /></a></li>
            <li>
                <ul class="flex flex-col justify-start items-start">
                 <li class="font-semibold text-lg text-black">{{ $t('contacts.address') }}</li>     
                 <li class="font-regular text-lg text-gray-700">{{ $t('contacts.location') }}</li>     
                </ul>
            </li>
        </ul>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
    name: 'ContactDetails'
}
</script>

<style>

</style>