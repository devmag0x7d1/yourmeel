<script>
import BasketCard from "@/components/BasketCard.vue"
import ProductList from "@/components/ProductList.vue"

export default {
	components: {
		BasketCard,
		ProductList
	}
}
</script>

<template>
	<main class="pb-[20px] tablet:pb-[30px] laptop:pb-[40px]">
		<div class="flex flex-col laptop:flex-row gap-[30px] max-w-[1310px] m-auto px-[10px]">
			<BasketCard />
			<ProductList />
		</div>
	</main>
</template>
