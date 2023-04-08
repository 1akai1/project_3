<template>
    <div>
        <DContentCard :limit="50" :contentSection="contentSection" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    let categoryNumber = 0
    const contentSection = []
    if (id == 'Escape from Tarkov') categoryNumber = 1
    if (id == 'New World') categoryNumber = 2
    if (id == 'Black Desert Online') categoryNumber = 3
    if (id == 'World of Warcraft') categoryNumber = 4
    if (id == 'Прочее') categoryNumber = 5
    const url = 'https://adm.desync.ru/categories/' + categoryNumber
    const { data } = await useFetch(url)
    contentSection.push(data.value)
</script>

<style lang="scss" scoped>

</style>