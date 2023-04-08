<template>
    <div class="root">
        <DHeader/>
        <NuxtPage :contentSection="contentSection" :mainSection="mainSection"/>
        <DFooter />
    </div>
</template>

<script setup>
    const { data } = await useLazyFetch('https://adm.desync.ru/categories')
    const  articles  = await useLazyFetch('https://adm.desync.ru/articles')
    const nav = []
    const tag = ['новость','патч', 'гайд', 'полезное', 'баг']
    const mainSection = []
    const contentSection = []
    data.value.forEach(element => {
        nav.push(element.name)
        contentSection.push(element)
    })
    articles.data.value.slice(7,15).forEach(element => {
        mainSection.push(element)
    })
</script>
    
<style lang="sass">
    @import '/assets/styles/styles.sass'
</style>