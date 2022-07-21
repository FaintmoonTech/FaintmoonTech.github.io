<template>
    <div class="page" :style="pageStyle">
        <p class="title">
            强大的搜索功能
        </p>
        <p class="subtitle">
            寻找您心中所想的那颗星
        </p>
        <div class="searchContainer" :style="searchContainerStyle">
            <div class="search">
                <canvas width="1" height="1" class="cursor" :style="cursorStyle" />
                <span :style="{ opacity: 10 * scrollY - 60 }">
                    心
                </span>
                <span :style="{ opacity: 10 * scrollY - 64 }">
                    宿
                </span>
            </div>
            <div class="searchItem" :style="{ opacity: 2 * scrollY - 13 }">
                <img src="../assets/star.png" />
                <div>
                    <p class="title">心宿一，天蝎座 σ</p>
                    <p class="subtitle">HIP 80112, HD 147165, HR 6084</p>
                    <p class="subtitle">赤经 16h 21m 11s &nbsp;&nbsp; 赤纬 -25° 35' 34"</p>
                </div>
            </div>
            <div class="searchItem" :style="{ opacity: 2 * scrollY - 14 }">
                <img src="../assets/star.png" class="red" />
                <div>
                    <p class="title">心宿二，天蝎座 α</p>
                    <p class="subtitle">HIP 80763, HD 148478, HR 6134</p>
                    <p class="subtitle">赤经 16h 29m 24s &nbsp;&nbsp; 赤纬 -26° 25' 55"</p>
                </div>
            </div>
            <div class="searchItem" :style="{ opacity: 2 * scrollY - 15 }">
                <img src="../assets/star.png" />
                <div>
                    <p class="title">心宿三，天蝎座 τ</p>
                    <p class="subtitle">HIP 81266, HD 149438, HR 6165</p>
                    <p class="subtitle">赤经 16h 35m 53s &nbsp;&nbsp; 赤纬 -28° 12' 58"</p>
                </div>
            </div>
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
    mounted() {
        const canvas = document.querySelector(".cursor");
        const ctx = canvas.getContext("2d");
        this.drawCanvas(ctx, 0);
    },
    computed: {
        pageStyle() {
            if (this.scrollY < 4) return null
            if (this.scrollY < 5) {
                return {
                    display: "block",
                    opacity: 3 * this.scrollY - 12,
                    top: `${this.winHeight * (1.2 - this.scrollY * 0.2)}px`
                }
            }
            if (this.scrollY < 8) {
                return {
                    display: "block",
                    top: `${this.winHeight * 0.2}px`
                }
            }
            return {
                display: "block",
                top: `${this.winHeight * (1 - 0.1 * this.scrollY)}px`,
                opacity: 17 - 2 * this.scrollY
            }
        },
        searchContainerStyle() {
            if (this.scrollY < 6) {
                return {
                    transform: `translateX(${-200 * ((this.scrollY - 6) ** 2)}px)`,
                    opacity: this.scrollY - 5
                };
            }
            return null;
        },
        cursorStyle() {
            if (this.scrollY < 6.1) return null
            if (this.scrollY < 6.5) {
                return {
                    marginLeft: "1.2rem"
                }
            }
            return {
                marginLeft: "2.4rem"
            }
        }
    },
    methods: {
        drawCanvas(ctx, angle) {
            ctx.clearRect(0, 0, 1, 1);
            ctx.fillStyle = `rgba(155, 230, 255, ${Math.sin(angle) * 0.4 + 0.5})`;
            ctx.fillRect(0, 0, 1, 1);
            window.requestAnimationFrame(() => this.drawCanvas(ctx, angle + 0.05 > 6.28 ? 0 : angle + 0.05));
        }
    }

}
</script>

<style>
.searchContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search {
    background: #fff4;
    padding-left: 1rem;
    height: 3rem;
    width: 18rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 1rem;
}

.cursor {
    position: absolute;
    width: 2px;
    height: 30px;
}

.searchItem {
    background: #0004;
    width: 19rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 1px;
    overflow: hidden;
}

.searchItem>img {
    margin: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    filter: drop-shadow(100px 0px #bcc3ff);
    transform: translateX(-100px);
}

.searchItem>img.red {
    filter: drop-shadow(100px 0px #ffd2c0);
}

.searchItem>div>p.title {
    margin-top: 0.3rem;
    margin-bottom: 0.4rem;
    color: #fffb;
}

.searchItem>div>p.subtitle {
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    color: #fff8;
}
</style>