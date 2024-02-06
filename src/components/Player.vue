<template>
	<div>
		<small>Clique para ativar o som</small>
		<button @click="handleClick" :class="{ 'button-pulse': isActive }">
			🔈️💦
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import sound from "../../assets/sound.mp3";

const audio = new Audio(sound);
audio.loop = true;
const isActive = ref(false);

const handleClick = () => {
	!isActive.value ? audio.play() : audio.pause();
	isActive.value = !isActive.value;
};
</script>

<style scoped lang="postcss">
div {
	@apply flex flex-col items-center justify-center mt-12;

	small {
		@apply text-sm;
	}

	button {
		@apply mt-2 text-5xl bg-white rounded-full py-5 px-8;
	}
}
</style>
