<template>
	<main>
		<h1>Secafone</h1>
		<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
		<Player />
	</main>
	<Explanation />
	<h3>Artigos</h3>
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
import { inject } from "vue";

const articles = inject("articles") as any;
</script>

<style scoped lang="postcss">
main {
	@apply main-background text-white flex flex-col items-center justify-center h-screen-9/10 gap-2 text-center;

	h1 {
		@apply text-4xl lg:text-5xl font-bold drop-shadow-lg;
	}

	p {
		@apply text-lg lg:text-xl w-11/12;
	}

}
h3 {
	@apply text-lg lg:text-xl text-center font-bold;
}
</style>
