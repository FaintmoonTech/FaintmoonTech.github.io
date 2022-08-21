<template>
    <div class="page footer" :style="pageStyle">
        <p>
            <a href="./terms-of-service.html">用户协议</a>
            |
            <a href="./privacy-policy.html">隐私政策</a>
        </p>
        <p>
            <a href="https://beian.miit.gov.cn">
            沪ICP备2022023047号
            </a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageFourth',
    props: {
        scrollY: Number,
    },
    computed: {
        pageStyle() {
            if (this.scrollY < 18) return null
            return {
                display: "block",
                opacity: this.scrollY - 18
            }
        }
    }
}
</script>

<style>
.page.footer {
    top: auto;
    bottom: 0px;
    color: #ffffffaa;
}

.footer>p {
    margin: 0 0 0.5rem 0;
}

.footer>p>a {
    color: #ffffffaa;
    text-decoration: none;
}

.footer>p>a:hover {
    color: #aaccffaa;
}

.footer>p:last-child {
    margin: 0 0 1rem 0;
}
</style>