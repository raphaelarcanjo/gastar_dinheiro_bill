const store = new Vuex.Store({
    state: {
        total: 90000000000,
        products: [
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/bigmac.jpg", name: "Big Mac", price: "2" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/cupofcoffee.jpg", name: "Xícara de Café", price: "4" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/videogame.jpg", name: "Vídeo Game", price: "60" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/charity.jpg", name: "Caridade", price: "100" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/headphones.jpg", name: "Headphones", price: "200" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/airjordans.jpg", name: "Air Jordans", price: "200" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/skateboard.jpg", name: "Skateboard", price: "300" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/smartphone.jpg", name: "Smartphone", price: "600" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/gamingconsole.jpg", name: "Console", price: "600" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/bike.jpg", name: "Bicicleta", price: "800" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/drone.jpg", name: "Drone", price: "800" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "15" },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "livro", price: "90000000000" },
        ]
    },
    mutations: {
        calcTotal: function(state, product) {
            state.total += parseInt(product.deduced)
            product.count = (parseInt(product.count)) ? parseInt(product.count) : 0
            product.deduced = (parseInt(product.count) * parseInt(product.price))
            state.total -= parseInt(product.deduced)
        },
        increase: function(state, product) {
            if (state.total - parseInt(product.price) >= 0) {
                product.count++;
                state.total -= parseInt(product.price)
                product.deduced += parseInt(product.price)
            }
        },
        decrease: function(state, product) {
            product.count--;
            state.total += parseInt(product.price)
            product.deduced -= parseInt(product.price)
        }
    }
})

window.STORE = store