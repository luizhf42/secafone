<template>
	<main>
		<h1>Seca Fone</h1>
		<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
		<Player />
	</main>
	<Explanation />
	<Footer />
</template>

<script setup lang="ts">
import Player from "./components/Player.vue";
import Explanation from "./components/Explanation.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped lang="postcss">
main {
	@apply main-background text-white flex flex-col items-center justify-center h-screen-9/10 gap-2 text-center;

	h1 {
		@apply text-4xl lg:text-5xl font-bold;
	}

	p {
		@apply text-lg lg:text-xl w-11/12;
	}
}
</style>
