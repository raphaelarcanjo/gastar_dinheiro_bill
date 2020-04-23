const app = new Vue({
    el: "#app",
    data: function() {
        return {}
    },
    computed: {
        total: function() {
            return this.$store.state.total
        },
        products: function() {
            return this.$store.state.products
        }
    },
    store: window.STORE
})