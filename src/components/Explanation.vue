<template>
	<section>
		<p>
			O <strong>Seca Fone</strong> utiliza sons para expelir água de
			dispositivos eletrônicos, como smartphones, tablets, notebooks, etc. O
			contato da água com a parte interna desses dispositivos pode causar
			diversos problemas como corrosão e oxidação, danificando-os, muitas vezes,
			de forma permanente. A vibração sonora ajuda a mover e expelir a água
			através da saída de som. Use com cuidado e evite volumes muito altos.
		</p>
		<img loading="lazy" src="../../assets/images/illustration.webp" alt="" />
	</section>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
section {
	@apply my-10 flex flex-col md:flex-row items-center justify-normal md:justify-between gap-8 w-4/5 mx-auto;

	p {
		@apply md:text-lg lg:text-xl w-full text-justify md:w-2/3;
	}

	img {
		@apply w-full max-w-md md:w-1/4;
	}
}
</style>
