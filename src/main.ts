import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { inject } from "@vercel/analytics";

import Home from "./components/Home.vue";
import Article from "./components/Article.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: Home },
	{
		path: "/:articleSlug",
		component: Article,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
const articles = {
	"como-preservar-o-celular": {
		slug: "como-preservar-o-celular",
		title: "Como preservar o celular",
		description: "Dicas de como preservar seu celular",
		content: `<p>O celular é uma extensão vital de nossas vidas diárias, que armazena nossas memórias, contatos e facilita o acesso ao mundo digital. A preservação esse dispositivo é essencial para garantir sua longevidade e desempenho consistente. Afinal, já se imaginou sem seu querido smartphone? Para ajudar a manter seu celular em ótimo estado, aqui estão algumas dicas úteis:</p>

		<h3>Use capinhas e películas</h3>
		
		<p>
			Se previnir de acidentes é essencial. Investir nas famosas capinhas e películas é o primeiro passo para manter seu celular seguro contra arranhões, quedas e outros danos acidentais. Esses acessórios atuam como uma armadura, absorvendo impactos e protegendo a integridade física do aparelho.
		</p>
		
		<h3>Transporte consciente</h3>
		
		<p>Capinhas ajudam, mas não são suficientes. Transportar seu celular solto em uma bolsa, se batendo e raspando em outras coisas pode causar danos. Guarde-o em um local que o mantenha seguro e protegido, como um bolso com zíper ou um compartimento separado em sua bolsa. Também tome cuidado ao levar o celular no bolso da calça! Derrubar o coitado na calçada não é nada legal.</p>
		
		<h3>Cuidado com a bateria</h3>
		
		<p>Deixar a bateria superaquecer é péssimo. Pode prejudicar a vida útil do celular e até ser arriscado, com risco de estufamento. Também seja consciente ao carregá-la: use carregadores originais e não carregue em voltagens não suportadas.</p>
		
		<h3>Deixe-o limpinho</h3>
		
		<p>Manter seu celular limpo não é apenas estético, mas também ajuda a prevenir danos. Use um pano macio para remover poeira, sujeira e impressões digitais da tela e da parte traseira do dispositivo. Evite o uso de produtos químicos agressivos ─ eles podem danificar o dispositivo.</p>
		
		<h3>Fique alerta com o ambiente</h3>
		
		<p>Evite exposição a condições extremas, como temperaturas muito altas ou baixas, que podem prejudicar o funcionamento interno do seu celular. Além disso, evite a exposição a líquidos. Caso aconteça um acidente com água, o <strong>Secafone</strong> pode te ajudar!</p>
		
		<p>Seguindo essas dicas simples, você pode prolongar a vida útil do seu celular, garantindo um desempenho consistente e preservando suas funcionalidades. Isso ajudará a evitar gastos com reparos e substituições, além de contribuir com o planeta ao diminuir o descarte de lixo eletrônico.</p>`,
	},
};

createApp(App).use(router).provide("articles", articles).mount("#app");
inject();
