<template>
    <div class='d-tag-bar '>
        <div class="d-tag-bar__content content">
            <div class="d-tag-bar__text">
                <div :class="`d-tag-bar__text${index}`" v-for="tagItem, index in tag" :key="index">
                    #{{tagItem}}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        tag: Array
    })
</script>
<style lang="sass" scoped>
.d-tag-bar
    background-color: #000
    &__text
        display: flex
        flex-direction: row
        gap: 20px
        padding: 5px 20px
        color: #fff
// .content
//     max-width: 1640px
//     margin: 0 auto

</style>