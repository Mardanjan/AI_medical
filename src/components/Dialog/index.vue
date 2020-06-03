<template>
    <transition name="dialog">
        <div class="container" v-show="visible" @click="maskClose">
            <div class="content" @click.stop="stopEvent"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'self-container',
    props: {
        maskCloseDialog: {
            type: Boolean,
            default: false
        },
        closeCallback: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        stopEvent() {

        },
        maskClose() {
            if (this.maskCloseDialog) {
                this.close()
            }
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>