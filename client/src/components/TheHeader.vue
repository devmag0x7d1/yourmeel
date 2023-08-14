<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue"
import LogoBurgerIcon from "@/components/Icons/LogoBurgerIcon.vue"

export default {
	components: {
		LogoIcon,
		LogoBurgerIcon
	}
}
</script>

<template>
	<header class="relative w-full h-[459px] tablet:h-[349px] laptop:h-[466px] mb-[30px] laptop:mb-[40px] overflow-hidden">
		<div class="absolute bottom-0 left-2/4 translate-x-[-50%] w-[811px] h-[811px] tablet:w-[2540px] tablet:h-[2540px] laptop:w-[2880px] laptop:h-[2880px] bg-[#ffab08] rounded-full">
		</div>
		<div class="relative flex justify-center py-[24px]">
			<a href="/">
				<LogoIcon class="block select-none" />
			</a>
		</div>
		<div class="relative flex flex-col-reverse tablet:flex-row tablet:justify-center laptop:gap-[20px]">
			<div>
				<LogoBurgerIcon class="block w-[227px] h-[229px] laptop:w-[auto] laptop:h-[auto] m-auto select-none" />
			</div>
			<div>
				<h1 class="text-[30px] tablet:text-[36px] laptop:text-[50px] tablet:leading-[43px] laptop:leading-[60px] leading-[36px] font-extrabold text-white text-center tablet:text-left mb-[16px] tablet:mt-[26px] tablet:mb-[26px] laptop:mt-[46px] laptop:mb-[52px]">
					Только самые<br />
					<span class="text-[#ff5c00]">
						сочные бургеры!
					</span>
				</h1>
				<span class="block text-[12px] laptop:text-[16px] text-white text-center tablet:text-left">
					Бесплатная доставка от <b class="font-semibold">599₽</b>
				</span>
			</div>
		</div>
	</header>
</template>
