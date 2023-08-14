<script>
import BasketCardProduct from "@/components/BasketCardProduct.vue"
import AppButton from "@/components/AppButton.vue"
import delivery from "@/assets/icons/delivery.png"

export default {
	components: {
		BasketCardProduct,
		AppButton
	},
	data() {
		return {
			delivery
		}
	},
	computed: {
		Basket() {
			return this.$store.state.Basket
		},
		SizeBasket() {
			return this.$store.getters.GetSizeBasket
		},
		SumBasket() {
			return this.$store.getters.GetSumBasket
		}
	}
}
</script>

<template>
	<div class="self-start w-full tablet:w-[300px] laptop:mt-[72px] py-[16px] px-[10px] bg-white rounded-[12px] shadow-[0_0_10px_0px_rgba(0,0,0,0.16)]">
		<div class="flex justify-between items-center" :class="Basket.length ? 'pb-[8px] laptop:pb-[12px] border-b-2 border-[#f2f2f3]' : ''">
			<h3 class="text-[16px] laptop:text-[24px] font-semibold leading-[16px] laptop:leading-[24px]">
				Корзина
			</h3>
			<div class="flex justify-center items-center w-[32px] laptop:w-[40px] h-[16px] laptop:h-[20px] bg-[#f2f2f3] rounded-[6px]">
				<span class="text-[10px] laptop:text-[12px] select-none">
					{{ SizeBasket }}
				</span>
			</div>
		</div>
		<div v-if="Basket.length">
			<div class="max-h-[228px] tablet:max-h-full mb-[12px] laptop:mb-[16px] overflow-auto">
				<BasketCardProduct v-for="(item, index) in Basket" :item="item" :index="index" :key="index" />
			</div>
			<div class="flex justify-between items-center mb-[18px] laptop:mb-[24px]">
				<span class="text-[12px] laptop:text-[16px]">
					Итого
				</span>
				<span class="text-[12px] laptop:text-[16px]">
					{{ SumBasket }}₽
				</span>
			</div>
			<div class="mb-[8px]">
				<AppButton>
					Оформить заказ
				</AppButton>
			</div>
			<div class="flex justify-between items-end h-[24px]">
				<div class="flex items-end gap-[8px]">
					<div>
						<img class="min-w-[24px] select-none" :src="delivery" alt="img">
					</div>
					<span class="text-[10px] laptop:text-[12px]">
						Бесплатная доставка
					</span>
				</div>
				<!-- <button class="text-[10px] text-[#b1b1b1] select-none">
					Свернуть
				</button> -->
			</div>
		</div>
	</div>
</template>
