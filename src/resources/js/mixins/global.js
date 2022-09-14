export default {
    computed: {
        site() {
            return this.$store.state.global.site
        },
        global() {
            return this.$store.state.global
        }
    },
}
