<template>
	<main>
		<h1>Seca Fone</h1>
		<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
		<Player />
	</main>
</template>

<script setup lang="ts">
import Player from "./components/Player.vue";
</script>

<style scoped lang="postcss">
main {
	@apply flex flex-col items-center justify-center h-screen gap-2 text-center;

	h1 {
		@apply text-4xl font-bold;
	}

	p {
		@apply text-lg w-11/12;
	}
}
</style>
