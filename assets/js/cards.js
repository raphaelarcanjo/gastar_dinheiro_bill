Vue.component('card', {
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
        <div class="cards">
            <div v-for="product in products" class="cards__card">
                <img :src="product.img" class="cards__card__img">
                <h2 class="cards__card__title">{{product.name}}</h2>
                <p class="cards__card__price">&dollar;{{product.price}}</p>
                <button @click="decrease(product)" class="cards__card__counter cards__card__counter--error" :disabled="product.count <= 0">Vender</button>
                    <input pattern="\d*" @input="calcTotal(product)" type="text" min="0" v-model="product.count" class="cards__card__input">
                <button @click="increase(product)" class="cards__card__counter cards__card__counter--success">Comprar</button>
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