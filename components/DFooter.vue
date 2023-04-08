<template lang="">
    <div class='d-footer'>
        <div class="d-footer__content content">
            <div class="d-footer__left">
                <div class="d-footer__logo">DeSync</div>
                <div class="d-footer__create">© 2018 - {{new Date().getFullYear()}}, DeSync.ru</div>
            </div>
            <div class="d-footer__right">
                <div class="d-footer__social-media">
                    <p>Ещё мы есть тут</p>
                    <img src="../assets/image/vk.e4b267c.svg" alt="">
                    <img src="../assets/image/telegram_cleared.624ccb0.svg" alt="">
                    <img src="../assets/image/discord.f9b02c2.svg" alt="">
                </div>
                <div class="d-footer__boosty">
                    <p>А тут можно помочь</p>
                    <img src="../assets/image/Boosty.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        footer: Array
    },
}
</script>
<style lang="sass">
.d-footer
    background-color: #000
    &__content
        display: flex
        flex-direction: row
        justify-content: space-between
</style>