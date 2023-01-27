<template>
    <div class="page" :style="pageStyle">
        <p class="title">
            繁星触手可及
        </p>
        <p class="subtitle">
            轻轻一点，了解您想知道的一切
        </p>
    </div>
    <canvas width="100" height="100" class="starSelection" :style="canvasStyle" />
    <div class="starIntro" :style="starIntroStyle">
        <p :style="{ opacity: 2 * scrollY - 3 }">轩辕十四</p>
        <p :style="{ opacity: 2 * scrollY - 3.5 }">外文名: Regulus</p>
        <p :style="{ opacity: 2 * scrollY - 4 }">星座: 狮子座</p>
        <p :style="{ opacity: 2 * scrollY - 4.5 }">距离: 24.3132 秒差距</p>
        <p :style="{ opacity: 2 * scrollY - 5 }">目视星等: 1.360</p>
        <p :style="{ opacity: 2 * scrollY - 5.5 }">绝对星等: -0.569</p>
        <p :style="{ opacity: 2 * scrollY - 6 }">光谱型: B7V</p>
    </div>
</template>

<script>
export default {
    name: 'PageFirst',
    props: {
        scrollY: Number,
        winHeight: Number,
        winWidth: Number
    },
    mounted() {
        const canvas = document.querySelector(".starSelection");
        const ctx = canvas.getContext("2d");
        this.drawCanvas(ctx, 0);
    },
    computed: {
        pageStyle() {
            if (this.scrollY < 0.4) return null
            if (this.scrollY < 1.5) {
                return {
                    display: "block",
                    opacity: 3 * this.scrollY - 1.2,
                    top: `${this.winHeight * (0.5 - this.scrollY * 0.2)}px`
                }
            }
            if (this.scrollY < 3.5) {
                return {
                    display: "block",
                    top: `${this.winHeight * 0.2}px`
                }
            }
            return {
                display: "block",
                top: `${this.winHeight * (0.55 - 0.1 * this.scrollY)}px`,
                opacity: 8 - 2 * this.scrollY
            }
        },
        starPosition() {
            const imgWidth = 1920;
            const imgHeight = 1200;
            const starX = 984;
            const starY = 523;
            if (this.winWidth / this.winHeight > imgWidth / imgHeight) {
                return [
                    starY * this.winWidth / imgWidth - (imgHeight * this.winWidth / imgWidth - this.winHeight) / 2,
                    starX * this.winWidth / imgWidth
                ];
            } else {
                return [
                    starY * this.winHeight / imgHeight,
                    starX * this.winHeight / imgHeight - (imgWidth * this.winHeight / imgHeight - this.winWidth) / 2
                ];
            }
        },
        canvasStyle() {
            if (this.scrollY < 1.5) {
                return {
                    display: "none"
                }
            }
            return {
                top: `${this.starPosition[0] - 25}px`,
                left: `${this.starPosition[1] - 25}px`,
                opacity: this.scrollY < 3.5 ? 1 : 8 - 2 * this.scrollY
            }
        },
        starIntroStyle() {
            if (this.scrollY < 1.5) {
                return {
                    display: "none"
                }
            }
            if (this.scrollY < 3.5) {
                return {
                    top: `${this.starPosition[0] + 15}px`,
                    left: `${this.starPosition[1] - 25}px`,
                    // opacity: 2 * this.scrollY - 3
                }
            }
            return {
                top: `${this.starPosition[0] + 15 - this.winHeight * 0.1 * (this.scrollY - 3.5)}px`,
                left: `${this.starPosition[1] - 25}px`,
                opacity: 8 - 2 * this.scrollY
            }
        },
    },
    methods: {
        drawCanvas(ctx, angle) {
            // 顶点到中心
            const d = 20 * (0.2 * Math.sin(4 * angle) + 1);
            // 三角形高度
            const h = 20 * (0.2 * Math.sin(4 * angle) + 1);
            // 三角形宽度
            const w = 2;
            ctx.clearRect(0, 0, 100, 100);
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(
                50 + d * Math.sin(angle),
                50 - d * Math.cos(angle)
            );
            ctx.lineTo(
                50 + (d + h) * Math.sin(angle) - w * Math.cos(angle),
                50 - (d + h) * Math.cos(angle) - w * Math.sin(angle)
            );
            ctx.lineTo(
                50 + (d + h) * Math.sin(angle) + w * Math.cos(angle),
                50 - (d + h) * Math.cos(angle) + w * Math.sin(angle)
            );
            ctx.fill();
            ctx.moveTo(
                50 + d * Math.cos(angle),
                50 + d * Math.sin(angle)
            );
            ctx.lineTo(
                50 + (d + h) * Math.cos(angle) + w * Math.sin(angle),
                50 + (d + h) * Math.sin(angle) - w * Math.cos(angle)
            );
            ctx.lineTo(
                50 + (d + h) * Math.cos(angle) - w * Math.sin(angle),
                50 + (d + h) * Math.sin(angle) + w * Math.cos(angle)
            );
            ctx.fill();
            ctx.moveTo(
                50 - d * Math.sin(angle),
                50 + d * Math.cos(angle)
            );
            ctx.lineTo(
                50 - (d + h) * Math.sin(angle) + w * Math.cos(angle),
                50 + (d + h) * Math.cos(angle) + w * Math.sin(angle)
            );
            ctx.lineTo(
                50 - (d + h) * Math.sin(angle) - w * Math.cos(angle),
                50 + (d + h) * Math.cos(angle) - w * Math.sin(angle)
            );
            ctx.fill();
            ctx.moveTo(
                50 - d * Math.cos(angle),
                50 - d * Math.sin(angle)
            );
            ctx.lineTo(
                50 - (d + h) * Math.cos(angle) - w * Math.sin(angle),
                50 - (d + h) * Math.sin(angle) + w * Math.cos(angle)
            );
            ctx.lineTo(
                50 - (d + h) * Math.cos(angle) + w * Math.sin(angle),
                50 - (d + h) * Math.sin(angle) - w * Math.cos(angle)
            );
            ctx.fill();
            window.requestAnimationFrame(() => this.drawCanvas(ctx, angle + 0.01 > 6.28 ? 0 : angle + 0.01))
        },
    }
}
</script>

<style>
.starSelection {
    position: fixed;
    width: 50px;
    height: 50px;
}

.starIntro {
    position: fixed;
    text-align: left;
    color: #fffb;
}

.starIntro>p {
    margin: 0;
    margin-top: 0.5rem;
}
</style>