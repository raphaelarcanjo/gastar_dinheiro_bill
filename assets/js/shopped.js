Vue.component('shopped', {
    data: function() {
        return {

        }
    },
    computed: {
        products: function() {
            return this.$store.state.products
        }
    },
    template: `
        <div class="shopped">
            <div v-for="product in products" v-if="product.count > 0" class="shopped__item">
                <img :src="product.img" class="shopped__item__img">
                <p class="shopped__item__title">{{product.name}}</p>
                <p class="shopped__item__counter">x {{product.count}}</p>
            </div>
        </div>
    `,
    methods: {
        calcTotal(product) {
            store.commit('calcTotal', product)
        },
        increase(product) {
            store.commit('increase', product)
        },
        decrease(product) {
            store.commit('decrease', product)
        }
    }
})