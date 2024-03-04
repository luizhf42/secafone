<template>
	<article>
		<details>
			<summary><slot name="title"></slot></summary>
			<p>
				<slot name="description"></slot>
			</p>
		</details>
	</article>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
article {
	@apply my-10 flex flex-col items-center justify-center gap-8 w-4/5 mx-auto max-w-3xl;

	details {
		@apply cursor-pointer border border-[#182120] rounded-md bg-white w-full;
	}

	summary {
		@apply p-3 font-bold text-[#182120];
	}

	p {
		@apply text-justify text-sm md:text-base xl:text-lg p-3 pt-0;
		
		span {
			@apply text-warning font-bold;
		}
	}

	details[open] {
		animation: openDetails 0.3s ease-out forwards;
	}

	@keyframes openDetails {
		from {
			height: 0;
			opacity: 0;
		}
		to {
			height: auto;
			opacity: 1;
		}
	}
}
</style>
