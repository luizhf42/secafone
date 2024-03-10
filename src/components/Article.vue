<template>
	<div class="wrapper">
		<router-link to="/">← Voltar</router-link>
		<main>
			<h1>{{ articles[slug].title }}</h1>
			<div v-html="articles[slug].content"></div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute } from "vue-router";
const slug = useRoute().params.articleSlug as string;
const articles = inject("articles") as any;
</script>

<style scoped lang="postcss">
.wrapper {
	@apply w-10/12 max-w-xl mx-auto pt-4;

	a {
		@apply font-bold text-anchor;
	}

	h1 {
		@apply text-2xl lg:text-3xl font-bold drop-shadow-lg my-4;
	}

	:deep(h3) {
		@apply text-lg lg:text-xl font-bold;
	}

	:deep(p) {
		@apply text-justify text-base lg:text-lg mt-1 mb-5;
	}
}
</style>
