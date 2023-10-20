<template>
    <div class="page" :style="pageStyle">
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg1.jpeg" class="bg" :style="{opacity: 2 * scrollY - 19.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg2.jpeg" class="bg" :style="{opacity: 2 * scrollY - 21.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg3.jpeg" class="bg" :style="{opacity: 2 * scrollY - 23.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg4.jpeg" class="bg" :style="{opacity: 2 * scrollY - 25.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg5.jpeg" class="bg" :style="{opacity: 2 * scrollY - 27.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg6.jpeg" class="bg" :style="{opacity: 2 * scrollY - 29.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg7.jpeg" class="bg" :style="{opacity: 2 * scrollY - 31.5}" />
        <img src="https://s1.imagehub.cc/images/2023/10/20/bg8.jpeg" class="bg" :style="{opacity: 2 * scrollY - 33.5}" />
        <p class="title">
            时空旅行
        </p>
        <p class="subtitle">
            探索任意时间、任意地点的星空
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4 * Math.abs(9.5 - scrollY)}">
            中国 上海 2021.09.05 05:45
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(10.5 - scrollY)}">
            蒙古 乌兰巴托 2022.07.25 03:00
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(11.5 - scrollY)}">
            俄罗斯 圣彼得堡 1987.01.16 01:59
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(12.5 - scrollY)}">
            埃及 开罗 2030.03.22 01:44
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(13.5 - scrollY)}">
            美国 西雅图 1982.12.17 16:20
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(14.5 - scrollY)}">
            阿根廷 布宜诺斯艾利斯 1998.12.31 21:20
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(15.5 - scrollY)}">
            新西兰 惠灵顿 2008.03.10 19:05
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 4* Math.abs(16.5 - scrollY)}">
            古巴 哈瓦那 2014.04.10 15:44
        </p>
        <p class="positionAndTime" :style="{opacity: 2 - 3* Math.abs(17.5 - scrollY)}">
            南极 昆仑站 2035.06.21 10:44
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageThird',
    props: {
        scrollY: Number,
        winHeight: Number,
    },
    computed: {
        pageStyle() {
            if (this.scrollY < 8.5) return null
            if (this.scrollY < 9.5) {
                return {
                    display: "block",
                    opacity: 3 * this.scrollY - 25.5,
                    top: `${this.winHeight * (2.1 - this.scrollY * 0.2)}px`
                }
            }
            if (this.scrollY < 18) {
                return {
                    display: "block",
                    top: `${this.winHeight * 0.2}px`
                }
            }
            return {
                display: "block",
                top: `${this.winHeight * (2 - 0.1 * this.scrollY)}px`,
                opacity: 37 - 2 * this.scrollY
            }
        }
    }
}
</script>

<style>
.positionAndTime {
    position: absolute;
    width: 100%;
    color:  #ffe;
}
</style>