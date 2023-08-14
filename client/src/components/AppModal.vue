<script>
import CancelIcon from "@/components/Icons/CancelIcon.vue"

export default {
	components: {
		CancelIcon
	},
	props: [
		"data"
	]
}
</script>

<template>
	<div class="tablet:flex tablet:justify-center tablet:items-center fixed top-0 left-0 w-full min-w-[320px] h-full bg-[#000000cc]" @click="">
		<div class="w-full h-full tablet:w-[524px] laptop:w-[684px] tablet:h-auto p-[10px] tablet:p-[16px] laptop:p-[24px] bg-white tablet:rounded-[24px]" @click.stop>
			<div class="flex flex-col-reverse tablet:flex-row tablet:justify-between tablet:items-start mb-[12px] tablet:mb-[16px] laptop:mb-[24px] bg-white">
				<div>
					<h3 class="text-[28px] laptop:text-[40px] leading-[48px] font-semibold">
						{{ data.name }}
					</h3>
				</div>
				<div class="flex justify-end">
					<button class="min-w-[24px]" @click="">
						<CancelIcon />
					</button>
				</div>
			</div>
			<div class="flex flex-col tablet:flex-row gap-[16px] tablet:gap-[8px] laptop:gap-[16px]">
				<div class="w-full tablet:min-w-[226px] laptop:min-w-[276px] aspect-[10/8] self-start rounded-[16px] bg-[#b1b1b1] overflow-hidden">
					<img class="object-cover h-full" :src="data.image" alt="img">
				</div>
				<div class="flex flex-col justify-between gap-[10px]">
					<p class="text-[12px] laptop:text-[16px]">
						{{ data.description }}
					</p>
					<div class="text-[10px] laptop:text-[12px]">
						<span>
							Состав
						</span>
						<ul class="mb-[4px]">
							<li v-for="(item, index) in data.structure" :key="index">
								{{ item }}
							</li>
						</ul>
						<span class="text-[#b1b1b1]">
							{{ data.weight }}г
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
