<template>
    <main class="d-main-card content">
        <div class="d-main-card__content">
            <div class="d-main-card__card"  v-for="card, in mainSection" :key="card" :style="`background-image: url(${card?.image?.url});`">
                <div class="d-main-card__articles">
                    <p>{{card?.category?.name}}</p>
                    <!-- <time>{{card?.updated_at}}</time> -->
                </div>
                <div class="d-main-card__title">{{card?.title}}</div>
            </div>
        </div>
    </main>
</template>
<script setup>
    const props = defineProps({
        mainSection: Array
    })
</script>
<style lang="sass">
    .d-main-card
        padding-top: 20px
        &__content
            display: grid
            grid-template-columns: repeat(4, 1fr) 
            height: 500px
        &__card
            background-position: center
            background-size: cover
            background-repeat: no-repeat
            display: flex
            flex-direction: column
            justify-content: space-between
            color: #fff
        &__articles
            display: flex
            flex-direction: row
            justify-content: space-between
            padding: 15px
        &__title
            padding: 15px
</style>