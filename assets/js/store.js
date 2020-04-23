const store = new Vuex.Store({
    state: {
        total: 90000000000,
        products: [
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/bigmac.jpg", name: "Big Mac", price: 2 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/cupofcoffee.jpg", name: "Xícara de Café", price: 4 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/book.jpg", name: "Livro", price: 15 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/videogame.jpg", name: "Vídeo Game", price: 60 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/charity.jpg", name: "Caridade", price: 100 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/headphones.jpg", name: "Headphones", price: 200 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/airjordans.jpg", name: "Air Jordans", price: 200 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/skateboard.jpg", name: "Skateboard", price: 300 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/smartphone.jpg", name: "Smartphone", price: 600 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/gamingconsole.jpg", name: "Console", price: 600 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/bike.jpg", name: "Bicicleta", price: 800 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/drone.jpg", name: "Drone", price: 800 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/designerhandbag.jpg", name: "Bolsa de Designer", price: 1000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/jetski.jpg", name: "Jet Ski", price: 8000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/4ktv.jpg", name: "4K TV", price: 10000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/diamondring.jpg", name: "Anel de Diamantes", price: 10000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/rolex.jpg", name: "Rolex", price: 15000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/speedboat.jpg", name: "Lancha", price: 30000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/foodtruck.jpg", name: "Food Truck", price: 50000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/tesla.jpg", name: "Tesla", price: 70000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/monstertruck.jpg", name: "Carro Monstro", price: 150000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/helicopter.jpg", name: "Helicóptero", price: 175000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/ferrari.jpg", name: "Ferrari", price: 200000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/lamborghini.jpg", name: "Lamborghini", price: 200000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/firetruck.jpg", name: "Carro de Bombeiro", price: 200000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/townhouse.jpg", name: "Condomínio", price: 200000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/bar.jpg", name: "Bar", price: 300000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/pizzashop.jpg", name: "Pizzaria", price: 500000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/barofgold.jpg", name: "Barra de Ouro", price: 500000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/superbowlad.jpg", name: "Estádio de Futebol", price: 5000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/beachhouse.jpg", name: "Casa na Praia", price: 5000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/yacht.jpg", name: "Iate", price: 10000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/f16.jpg", name: "F16", price: 15000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/skyscraper.jpg", name: "Arranha-céu", price: 50000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/mansion.jpg", name: "Mansão", price: 50000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/rocket.jpg", name: "Foguete", price: 60000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/passengerjet.jpg", name: "Avião", price: 150000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/monalisa.jpg", name: "Mona Lisa", price: 780000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/cruiseship.jpg", name: "Cruzeiro", price: 1200000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/nbateam.jpg", name: "Time da NBA", price: 1300000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/mlbteam.jpg", name: "Time da MLB", price: 1500000000 },
            { deduced: 0, count: 0, img: "https://neal.fun/spend/minified/nflteam.jpg", name: "Time da NFL", price: 2300000000 }
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