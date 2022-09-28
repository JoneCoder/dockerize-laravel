<template>
    <div class="container">
        <PageLoader v-if="$root.loading" />
        <TopHeader />
        <router-view />
        <FooterBottom />
    </div>
</template>

<script>
import PageLoader from "./Components/PageLoader.vue";
import TopHeader from "./Layouts/TopHeader.vue";
import FooterBottom from "./Layouts/FooterBottom.vue";

export default {
    name: "App",
    components: {
        PageLoader,
        TopHeader,
        FooterBottom,
    },
    data() {
        return { count: 0 };
    },
    mounted() {
        setTimeout(() => this.$root.loading = false, 4000)
    }
};
</script>
