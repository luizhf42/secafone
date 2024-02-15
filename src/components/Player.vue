<template>
	<div>
		<small id="button-label">Clique para ativar o som</small>
		<button @click="handleClick" :class="{ 'button-pulse': isActive }" aria-labelledby="button-label">
			<img src="../../assets/images/speaker.svg" alt="" />
			<img src="../../assets/images/droplets.svg" alt="" />
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
		@apply text-xs sm:text-sm lg:text-base; 
	}

	button {
		@apply mt-2 flex justify-center items-center text-5xl bg-white rounded-full py-5 px-8;

		img {
			@apply w-12 h-12 sm:w-16 sm:h-16;
		}
	}
}
</style>
