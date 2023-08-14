<script>
import ProductListCard from "@/components/ProductListCard.vue"
import AppModal from "@/components/AppModal.vue"

export default {
	components: {
		ProductListCard,
		AppModal
	},
	data() {
		return {
			ModalData: {},
			IsModal: false
		}
	},
	computed: {
		ActiveIndex() {
			return this.$store.getters.GetActiveIndex
		},
		Products() {
			return this.$store.getters.GetProducts
		}
	},
	mounted() {
		fetch(`http://localhost:3000/food/${this.ActiveIndex}`)
			.then(res => res.json())
			.then(json => this.$store.commit("SetProducts", json))
	}
}
</script>

<template>
	<div class="flex-1">
		<h2 class="text-[28px] laptop:text-[40px] laptop:leading-[48px] font-semibold mb-[16px] laptop:mb-[24px]">
			{{ this.$store.state.AssortmentNames[ActiveIndex] }}
		</h2>
		<div class="flex flex-wrap gap-[10px] tablet:gap-[20px] laptop:gap-[30px]">
			<ProductListCard v-for="(item, index) in Products" :item="item" :key="index" />
		</div>
		<Teleport v-if="IsModal" to="body">
			<AppModal :data="ModalData" />
		</Teleport>
	</div>
</template>
