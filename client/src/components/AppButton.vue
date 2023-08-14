<script>
export default {
	props: [
		"type"
	]
}
</script>

<template>
	<button class="w-full h-[30px] laptop:h-[40px] text-[12px] laptop:text-[16px] leading-[12px] laptop:leading-[16px] rounded-[8px] laptop:rounded-[12px] text-center select-none hover:text-white hover:bg-[#ffab08] active:bg-[#f86310] transition" :class="type === 'secondary' ? 'text-black bg-[#f2f2f3]' : 'text-white bg-[#ff7020]'">
		<slot></slot>
	</button>
</template>
