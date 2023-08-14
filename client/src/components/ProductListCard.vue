<script>
import AppButton from "@/components/AppButton.vue"

export default {
	components: {
		AppButton
	},
	props: [
		"item"
	],
	methods: {
		GetDataProduct(data) {
			let condition = true

			this.$store.state.Basket.find((elem, i) => {
				if (elem.name === data.name) {
					this.$store.commit("AddBasketCount", i)
					condition = false
					return
				}
			})

			if (condition) {
				const tmp = {}
				tmp.name = data.name
				tmp.image = data.image
				tmp.price = data.price
				tmp.weight = data.weight
				tmp.count = 1
				this.$store.commit("AppendBasket", tmp)
			}
		}
	}
}
</script>

<template>
	<div class="w-[145px] laptop:w-[300px] p-[4px] laptop:p-[12px] rounded-[12px] laptop:rounded-[18px] bg-white">
		<div 
			class="w-full aspect-[10/8] rounded-[8px] laptop:rounded-[12px] mb-[10px] laptop:mb-[16px] bg-[#b1b1b1] overflow-hidden cursor-pointer"
			@click="this.$store.commit('SetIsModal')">
			<img class="object-cover h-full" :src="item.image" alt="img">
		</div>
		<div>
			<div class="mb-[7px]">
				<div class="mb-[16px] laptop:mb-[29px]">
					<span class="block text-[16px] laptop:text-[24px] leading-[16px] laptop:leading-[24px] font-semibold mb-[4px] laptop:mb-[8px]">
						{{ item.price }}₽
					</span>
					<span class="block text-[12px] laptop:text-[16px]">
						{{ item.name }}
					</span>
				</div>
				<span class="block text-[12px] laptop:text-[16px] text-[#b1b1b1] font-semibold">
					{{ item.weight }}г
				</span>
			</div>
			<div>
				<AppButton type="secondary" @click="GetDataProduct(item)">
					Добавить
				</AppButton>
			</div>
		</div>
	</div>
</template>
