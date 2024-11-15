<template>
	<button @click="handleClick" :class="buttonProps.class">
		<img :src="buttonProps.icon" alt="" />
		{{ buttonProps.text }} som
	</button>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import setupOscillator from "../utils/setupOscillator";
import speaker from "../../assets/images/speaker.svg";
import powerOff from "../../assets/images/power-off.svg";

const isPlaying = ref(false);
const audioContext = ref<AudioContext>();
const oscillator = ref<OscillatorNode>();
const buttonProps = computed(() => {
	return {
		class: isPlaying.value
			? "button-pulse bg-red-500 hover:bg-red-600"
			: "bg-teal-900 hover:bg-teal-950",
		icon: isPlaying.value ? powerOff : speaker,
		text: isPlaying.value ? "Desativar" : "Ativar",
	};
});

const initializeAudio = () => {
	audioContext.value = new AudioContext();
	oscillator.value = setupOscillator(audioContext.value);
};

const toggleOscillator = () => {
	if (isPlaying.value) {
		oscillator.value!.stop();
		oscillator.value = setupOscillator(audioContext.value!);
	} else {
		oscillator.value!.start();
	}
};

const handleClick = () => {
	if (!oscillator.value && !isPlaying.value) initializeAudio();
	toggleOscillator();
	isPlaying.value = !isPlaying.value;
};

onUnmounted(() => {
	if (oscillator.value && isPlaying.value) oscillator.value.stop();
});
</script>

<style scoped lang="postcss">
button {
	@apply w-full max-w-80 text-teal-50 mt-10 flex justify-center items-center text-xl xs:text-3xl rounded-xl py-5 px-8 ;

	img {
		@apply xs:w-10 w-7 aspect-square mr-3;
	}
}
</style>
