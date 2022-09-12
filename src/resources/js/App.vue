<template>
    <div class="container">
        <PageLoader v-if="$root.loading" />
        <TopHeader />
        <router-view />
        <FooterBottom />
    </div>
</template>

<script>
import PageLoader from "./Components/PageLoader";
import TopHeader from "./Layouts/TopHeader";
import FooterBottom from "./Layouts/FooterBottom";

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
};
</script>
