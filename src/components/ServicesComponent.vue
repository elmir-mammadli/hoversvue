<template>
  <div class="bg-[#f1f1f1] py-[60px]" id="services">
    <div class="mx-auto max-w-7xl">
    <h1 class="text-[28px] font-bold tracking-tight pb-[60px]">{{ $t('services.heading') }}</h1>
    <div class="grid grid-cols-2 gap-[40px]">
            <div v-for="service in services" :key="service.id" class="flex gap-6 max-w-xl">
                    <img :src="service.icon" class="h-[50px]" alt="icon">
                <div>
                    <h1 class="font-semibold  tracking-tight text-xl">{{ service.title }}</h1>
                    <p class="text-[#777777] font-extralight pt-2">{{ service.perex }}</p>
                </div>
            </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ServicesComponent",

computed: {
    services() {
        return [
            {
                id: 1,
                title: this.$t('services.title-1'),
                perex: this.$t('services.perex-1'),
                icon: '/src/components/icons/services/03.png'
            },
            {
                id: 2,
                title: this.$t('services.title-2'),
                perex: this.$t('services.perex-2'),
                icon: '/src/components/icons/services/02.png'
            },
            {
                id: 3,
                title: this.$t('services.title-3'),
                perex: this.$t('services.perex-3'),
                icon: '/src/components/icons/services/01.png'
            },
            {
                id: 4,
                title: this.$t('services.title-4'),
                perex: this.$t('services.perex-4'),
                icon: '/src/components/icons/services/04.png'
            }
        ]
    }
}
}
</script>

<style>

</style>