<template>
    <header>
        <!-- <DNavBar :nav="data" /> -->
        <DTagBar :tag="tag" />
        {{ data }}
    </header>
</template>

<script setup>
    import getData from '@/hooks/getData'

    const data = getData('https://adm.desync.ru/categories')
    const tag = ref(['новость','патч', 'гайд', 'полезное', 'баг'])
        
    // console.log(data)
    // console.log(data().data)
    
</script>

<style lang="sass" scoped>

</style>