import { createStore } from "vuex"

export default createStore({
	state() {
		return {
			ActiveIndex: 0,
			Products: [],
			Basket: [],
			AssortmentNames: [
				"Бургеры",
				"Закуски",
				"Хот-доги",
				//	"Шаурма",
				//	"Пицца",
				//	"Вок",
				//	"Дессерты",
				//	"Соусы"
			]
		}
	},
	getters: {
		GetProducts(state) {
			return state.Products
		},
		GetActiveIndex(state) {
			return state.ActiveIndex
		},
		GetSizeBasket(state) {
			return state.Basket.reduce((currentSum, currentNumber) => {
				return currentSum + currentNumber.count
			}, 0)
		},
		GetSumBasket(state) {
			return state.Basket.reduce((currentSum, currentNumber) => {
				return currentSum + (currentNumber.price * currentNumber.count)
			}, 0)
		}
	},
	mutations: {
		ChangeActiveIndex(state, payload) {
			state.ActiveIndex = payload
		},
		SetProducts(state, payload) {
			state.Products = payload
		},
		AppendBasket(state, payload) {
			state.Basket.push(payload)
		},
		AddBasketCount(state, payload) {
			state.Basket[payload].count += 1
		},
		ReduceBasketCount(state, payload) {
			state.Basket[payload].count -= 1

			if (state.Basket[payload].count === 0) {
				state.Basket = state.Basket.filter(elem => elem.name !== state.Basket[payload].name)
			}
		}
	}
})
