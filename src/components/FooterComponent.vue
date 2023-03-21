<template>
   <footer class="rounded-lg shadow-2xl bg-white 0 m-4">
    <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="./icons/1h.png" class="w-[120px]" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" class="mr-4 hover:underline md:mr-6 ">{{ $t('navbar.about') }}</a>
                </li>
                <li>
                    <a :href="isEn ? '/public/ppen.pdf' : '/public/ppaz.pdf'" class="mr-4 hover:underline md:mr-6">{{ $t('footer.pp') }}</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">{{ $t('footer.licensing') }}</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">{{ $t('navbar.contacts') }}</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="https://flowbite.com/" class="hover:underline">Hovers Group LLC</a>. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script>
import i18n from '../i18n';

export default {
    computed: {
        isEn() {
            return i18n.global.locale === 'en';
        }
    }
}
</script>

<style>

</style>