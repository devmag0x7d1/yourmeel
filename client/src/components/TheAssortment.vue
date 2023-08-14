<script>
import burgers from "@/assets/icons/burgers.png"
import snacks from "@/assets/icons/snacks.png"
import hot_dogs from "@/assets/icons/hot_dogs.png"
//import shawarma from "@/assets/icons/shawarma.png"
//import pizza from "@/assets/icons/pizza.png"
//import wok from "@/assets/icons/wok.png"
//import desserts from "@/assets/icons/desserts.png"
//import sauces from "@/assets/icons/sauces.png"

export default {
	data() {
		return {
			AssortmentIcons: [
				burgers,
				snacks,
				hot_dogs
			]
		}
	},
	computed: {
		ActiveIndex() {
			return this.$store.getters.GetActiveIndex
		}
	},
	methods: {
		ChangeCounter(payload) {
			this.$store.commit("ChangeActiveIndex", payload)

			fetch(`http://localhost:3000/food/${this.ActiveIndex}`)
				.then(res => res.json())
				.then(json => this.$store.commit("SetProducts", json))
		}
	}
}

//const assortmentNames = ref([
//	"Бургеры",
//	"Закуски",
//	"Хот-доги",
//	"Шаурма",
//	"Пицца",
//	"Вок",
//	"Дессерты",
//	"Соусы"
//])

//const assortmentIcons = ref([
//	burgers,
//	snacks,
//	hot_dogs,
//	shawarma,
//	pizza,
//	wok,
//	desserts,
//	sauces
//])
</script>

<template>
	<nav class="max-w-[1310px] m-auto px-[10px] mb-[30px] laptop:mb-[40px] overflow-auto">
		<ul class="flex items-center pt-[4px] pb-[12px]">
			<li class="pr-[12px] tablet:pr-[24px]" v-for="(item, index) in this.$store.state.AssortmentNames" :key="index">
				<button
					class="text-[12px] laptop:text-[16px] font-normal flex items-center gap-[8px] h-[30px] laptop:h-[40px] px-[8px] laptop:px-[14px] rounded-full transition hover:shadow-[0_0_0_2px_rgb(248,99,16)] select-none"
					:class="ActiveIndex === index ? 'text-white bg-[#ffab09]' : 'bg-white'"
					@click="ChangeCounter(index)">
					<span>
						<img class="min-w-[24px]" :src="AssortmentIcons[index]" alt="img">
					</span>
					<span class="whitespace-nowrap">
						{{ item }}
					</span>
				</button>
			</li>
		</ul>
	</nav>
</template>
