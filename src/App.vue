<template>
	<main>
		<h1>Secafone</h1>
		<p>Entrou água no celular ou fone de ouvido? É fácil resolver.</p>
		<Player />
	</main>
	<Details>
		<template #title>Como funciona o Secafone?</template>
		<template #description>
			O <strong>Secafone</strong> utiliza sons para expelir água de dispositivos eletrônicos, como smartphones, tablets, notebooks, etc. O contato da água com a parte interna desses dispositivos pode causar diversos problemas como corrosão e oxidação, danificando-os, muitas vezes, de forma permanente. A vibração sonora ajuda a mover e expelir a água através da saída de som. <span>AVISO:</span> Cuidado com seus tímpanos! Não utilize se estiver com fones de ouvido ou muito próximo da saída de som.
		</template>
	</Details>
	<Details>
		<template #title>Como evitar que a água entre no meu dispositivo?</template>
		<template #description>
			Utilize capinhas protetoras, que ajudam a evitar o contato com a água. Não utilize o dispositivo próximo a piscinas, praias, banheiras, etc. O vapor da água também é prejudicial, então evite levar o celular ao banheiro para tomar banho.
		</template>
	</Details>
	<Details>
		<template #title>Derrubei meu celular na água! O que faço?</template>
		<template #description>
			É essencial desligar rapidamente o celular e retirar as peças removíveis (cartões SIM, bateria, etc) e,logo após, secá-lo com um pano. Se possível, leve o aparelho para uma assistência técnica. Caso não haja essa possibilidade, deixe o celular submerso em arroz cru, que ajudará a absorver a umidade. Lembre-se de usar o <strong>Secafone</strong> para expelir a água que permanecer no aparelho.
		</template>
	</Details>
	<Footer />
</template>

<script setup lang="ts">
import Player from "./components/Player.vue";
import Footer from "./components/Footer.vue";
import Details from "./components/Details.vue";
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
</style>
