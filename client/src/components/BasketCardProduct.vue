<script>
export default {
	props: [
		"item",
		"index"
	]
}
</script>

<template>
	<div class="flex justify-between py-[11px] laptop:py-[16px] border-b-2 border-[#f2f2f3]">
		<div class="flex gap-[6px]">
			<div class="w-[64px] h-[52px] bg-[#b1b1b1] rounded-[8px] overflow-hidden">
				<img class="object-cover h-full" :src="item.image" alt="img">
			</div>
			<div class="flex flex-col justify-between text-[12px] leading-[16px]">
				<p>
					<span class="block">
						{{ item.name }}
					</span>
					<span class="block text-[#b1b1b1]">
						{{ item.weight }}г
					</span>
				</p>
				<span>
					{{ item.price }}₽
				</span>
			</div>
		</div>
		<div class="flex items-center">
			<div class="text-[12px] laptop:text-[16px] flex justify-between items-center w-[74px] laptop:w-[84px] h-[30px] laptop:h-[40px] py-[7px] px-[8px] laptop:px-[12px] rounded-[8px] laptop:rounded-[12px] bg-[#f2f2f3] select-none">
				<button @click="this.$store.commit('ReduceBasketCount', index)">
					-
				</button>
				<span>
					{{ item.count }}
				</span>
				<button @click="this.$store.commit('AddBasketCount', index)">
					+
				</button>
			</div>
		</div>
	</div>
</template>
