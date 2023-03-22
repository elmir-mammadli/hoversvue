<template>
  <div class="flex flex-row-reverse gap-10 my-20 justify-center">  
    <ContactForm/>
    <iframe class="w-[50%] rounded-xl grayscale hover:grayscale-0 3s transition ease-in-out brightness-75 hover:brightness-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.493761961472!2d49.839092916378604!3d40.397911179367114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ce26355ab63%3A0xb9339cc4e18743ab!2sHovers%20Group%20LLC!5e0!3m2!1sen!2scz!4v1679404569971!5m2!1sen!2scz" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="max-w-xl shadow-2xl rounded-xl isolate bg-white pt-12 pb-12 px-6 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      </div>
      <div class="mx-auto max-w-lg flex flex-col flex-wrap text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact details</h2>
        <div class="my-5">
            <ul class="flex flex-row py-5 gap-3 justify-start items-center">
            <li class="border rounded-full border-gray-200 p-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-phone" size="xl" /></a></li>
            <li class="font-medium text-xl text-gray-600"><a href="tel.:+994505939300">+99450-593-93-00</a></li>
        </ul>
        <ul class="flex flex-row py-5 gap-2 justify-start items-center">
            <li class="border rounded-full border-gray-200 px-4 py-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-envelope" size="xl" /></a></li>
            <li>
                <ul class="flex flex-col justify-start items-start">
                 <li class="font-semibold text-lg text-black">Write Us</li>     
                 <li class="font-regular text-lg text-gray-700"><a href="mailto:info@hoversgroup.net">info@hoversgroup.net</a></li>     
                </ul>
            </li>
        </ul>
        <ul class="flex flex-row py-5 gap-2 justify-start items-center">
            <li class="border rounded-full border-gray-200 px-5 py-4 bg-gray-200"><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] text-green-600 transition-all" icon="fa-location-dot" size="xl" /></a></li>
            <li>
                <ul class="flex flex-col justify-start items-start">
                 <li class="font-semibold text-lg text-black">Write Us</li>     
                 <li class="font-regular text-lg text-gray-700">{{ $t('contacts.location') }}</li>     
                </ul>
            </li>
        </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>

<style>

</style>