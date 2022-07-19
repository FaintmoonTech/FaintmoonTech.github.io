<template>
    <div class="page" :style="page2Style">
        <p class="title">
            强大的搜索功能
        </p>
        <p class="subtitle">
            寻找您心中所想的那颗星
        </p>
        <div class="search">
            心宿
        </div>
        <div class="searchItem">
            心宿一
        </div>
        <div class="searchItem">
            心宿二
        </div>
        <div class="searchItem">
            心宿三
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageSecond',
    props: {
        scrollY: Number,
        winHeight: Number,
    },
    computed: {
        page2Style() {
            if (this.scrollY < 4) return null
            if (this.scrollY < 5) {
                return {
                    display: "block",
                    opacity: 3 * this.scrollY - 12,
                    top: `${this.winHeight * (1.2 - this.scrollY * 0.2)}px`
                }
            }
            if (this.scrollY < 6) {
                return {
                    display: "block",
                    top: `${this.winHeight * 0.2}px`
                }
            }
            return {
                display: "block",
                top: `${this.winHeight * (0.8 - 0.1 * this.scrollY)}px`,
                opacity: 13 - 2 * this.scrollY
            }
        },
    },

}
</script>

<style>
.search {
    background: #fff4;
    padding-left: 1rem;
    height: 3rem;
    width: 15rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 1rem;
}
</style>