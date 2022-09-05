<template>
    <div class="anchors-container">
        <div class="anchor anchor-page0"
            @click="scrollTo(0)"
            :style="{background: this.getColorHSL(1 - 0.3 * scrollY)}"></div>
        <div class="anchor anchor-page1"
            @click="scrollTo(3.5)"
            :style="{background: this.getColorHSL(1 - 0.3 * Math.abs(4 - scrollY))}">
        </div>
        <div class="anchor anchor-page2"
            @click="scrollTo(8)"
            :style="{background: this.getColorHSL(1 - 0.3 * Math.abs(8 - scrollY))}"></div>
        <div class="anchor anchor-page3"
            @click="scrollTo(10.5)"
            :style="{background: this.getColorHSL(3 - 0.6 * Math.abs(13.5 - scrollY))}">
        </div>
        <div class="anchor anchor-page4"
            @click="scrollTo(19)"
            :style="{background: this.getColorHSL(1 - 0.5 * Math.abs(19 - scrollY))}">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AnchorList',
    props: {
        scrollY: Number,
    },
    methods: {
        getColorHSL(weight) {
            if (weight > 1) weight = 1
            if (weight < 0) weight = 0
            return 'hsl(0, 0%, ' + (60 + 40 * weight) + '%)'
        },
        scrollTo(scrollY) {
            window.scrollTo({
                top: scrollY * window.innerHeight,
                left: 0,
                behavior: "smooth"
            })
        }
    }
}
</script>

<style>
.anchors-container {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}

.anchors-container>.anchor {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin: 12px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
</style>