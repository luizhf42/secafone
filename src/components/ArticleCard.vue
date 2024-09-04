<template>
	<article>
		<h3>
			<router-link :to="slug">
				<slot name="title"></slot>
			</router-link>
		</h3>
		<p>
			<slot name="description"></slot>
		</p>
	</article>
</template>

<script setup lang="ts">
const { slug } = defineProps<{
	slug: string;
}>();
</script>

<style lang="postcss" scoped>
article {
	@apply my-10 flex flex-col justify-center w-11/12 mx-auto max-w-3xl border border-[#182120] rounded-md bg-white;

	h3 {
		@apply p-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-anchor;
	}

	p {
		@apply text-justify text-xs sm:text-sm md:text-base lg:text-lg p-3 pt-0;
	}
}
</style>
