<template>
	<div class="wrapper">
		<router-link to="/">← Voltar</router-link>
		<main>
			<h1>{{ article.title }}</h1>
			<div class="info">
				<span
					>Escrito por
					<a
						href="https://www.linkedin.com/in/luizhf42"
						rel="noopener noreferrer"
						target="_blank"
						>Luiz Henrique</a
					></span
				>
				<span>Publicado em {{ formatArticleDate(article.publishedAt) }}</span>
				<span v-if="article.updatedAt"
					>Atualizado em {{ formatArticleDate(article.updatedAt) }}</span
				>
			</div>
			<img :src="`../../assets/images/${slug}.webp`" alt="" />
			<div class="content" v-html="article.content"></div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { articles } from "../data/articles";
import formatArticleDate from "../utils/formatArticleDate";

const slug = useRoute().params.articleSlug as string;
const article = articles[slug];
</script>

<style scoped lang="postcss">
.wrapper {
	@apply w-10/12 max-w-3xl mx-auto py-4;

	a {
		@apply font-bold;
	}

	h1 {
		@apply text-3xl lg:text-3xl font-bold drop-shadow-lg my-4;
	}

	.info {
		@apply flex flex-col my-4;
	}

	img {
		@apply object-cover max-h-64 w-full my-4;
	}

	:deep(h2) {
		@apply text-lg lg:text-xl font-bold;
	}

	:deep(p), :deep(li) {
		@apply text-justify text-base lg:text-lg mt-1 mb-5;
	}

	:deep(li) {
		@apply list-disc list-inside mb-2;
	}

	:deep(ul) {
		@apply mt-1 mb-5;
	}

	:deep(strong) {
		@apply font-semibold;
	}
}
</style>
