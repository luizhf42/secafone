<template>
	<main>
		<h1>Seca Fone</h1>
		<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
		<div>
			<small>Clique para ativar o som</small>
			<button @click="handleClick" :class="{ 'button-pulse': isActive }">
				🔈️💦
			</button>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import sound from "../assets/sound.mp3";

const audio = new Audio(sound);
audio.loop = true;
const isActive = ref(false);

const handleClick = () => {
	!isActive.value ? audio.play() : audio.pause();
	isActive.value = !isActive.value;
};
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

	div {
		@apply flex flex-col items-center justify-center mt-12;

		small {
			@apply text-sm;
		}

		button {
			@apply mt-2 text-5xl bg-white rounded-full py-5 px-8;
		}
	}
}
</style>
