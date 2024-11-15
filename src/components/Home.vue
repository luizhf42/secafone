<template>
	<main>
		<section>
			<h1>Secafone</h1>
			<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
			<Player />
		</section>
	</main>
	<Explanation />
	<h2>Artigos</h2>
	<ArticleCard
		v-for="article in articles"
		:key="article.slug"
		:slug="article.slug"
	>
		<template #title>{{ article.title }}</template>
		<template #description>{{ article.description }}</template>
	</ArticleCard>
</template>

<script setup lang="ts">
import Explanation from "./Explanation.vue";
import ArticleCard from "./ArticleCard.vue";
import Player from "./Player.vue";
import { articles } from "../data/articles";
</script>

<style scoped lang="postcss">
main {
	@apply text-teal-900 h-screen-9/10 flex items-center justify-center;

	section {
		@apply bg-teal-50 w-full max-w-xl text-balance flex flex-col items-center justify-center gap-2 text-center px-6 py-10 rounded-xl shadow-md;

		h1 {
			@apply text-4xl lg:text-5xl font-bold drop-shadow-lg;
		}

		p {
			@apply text-gray-600 text-lg lg:text-xl;
		}
	}
}
h2 {
	@apply text-lg lg:text-xl text-center font-bold;
}
</style>
