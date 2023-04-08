<template>
    <div class="d-content-card content">
        <div class="d-content-card__content" v-for="contentBox in contentSection" :key="contentBox">
            <h1 class="d-content-card__title">
                {{contentBox?.name}}
            </h1>
            <div class="d-content-card__box">
                <article v-for="itemCard, index in contentBox?.articles" :key="index">
                    <div class="d-content-card__card"  v-if="index < limit">
                        <div class="d-content-card__image" :style="`background-image: url(${itemCard?.image?.url});`" />
                        <p class="d-content-card__articles">{{itemCard?.title}}</p>
                        <div v-html='itemCard?.content'/>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        contentSection: Array,
        limit: {
            type: Number,
            default: 6
        }
    })
</script>
<style lang="sass" scoped>
    .d-content-card
        &__content
            display: flex
            flex-direction: column
        &__box
            display: flex
            flex-wrap: wrap
            gap: 20px
        &__card
            min-width: 250px
            max-width: 250px
            height: 300px
            overflow: hidden
        &__image
            width: 250px
            height: 145px
            background-position: center
            background-size: cover
</style>