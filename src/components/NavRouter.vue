<template>
  <div v-if="!isNavRouter" class="flex justify-center items-center bg-aboutcover w-[full] h-[300px] 2xl:h-[500px] bg-no-repeat bg-contain 2xl:bg-cover">
            <h1 class="text-white font-semibold text-7xl border-8 p-3 border-white">{{ notHome }}</h1>
    </div>
</template>

<script>
export default {
name: "NavRouter",
    computed: {
    isNavRouter() {
      const homePath = this.$route.path === '/'
    return homePath
  },
  notHome() {
    if (this.$route.path === '/about') {
      return this.$t('about.hero-header')
    } else if (this.$route.path === '/projects') {
      return this.$t('projectsHead.hero-header')
    } else {
      return this.$t('contacts.hero-header')}
  }
}
}
</script>

<style>

</style>