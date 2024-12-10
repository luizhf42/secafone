import comoPreservarOCelular from "../../assets/images/como-preservar-o-celular.webp";
import oQueFazer from "../../assets/images/o-que-fazer.webp";

type Article = {
	slug: string;
	image?: string
	title: string;
	publishedAt: string;
	updatedAt: string;
	description: string;
	content: string;
};

type Articles = {
	[slug: string]: Article;
};

export const articles: Articles = {
	"como-preservar-o-celular": {
		slug: "como-preservar-o-celular",
		image: comoPreservarOCelular,
		title: "Como preservar o celular",
		publishedAt: "10/03/2024",
		updatedAt: "09/12/2024",
		description: "Dicas de como preservar seu celular",
		content: `<p>O celular é uma extensão vital de nossas vidas diárias, que armazena nossas memórias, contatos e facilita o acesso ao mundo digital. A preservação desse dispositivo é essencial para garantir sua longevidade e desempenho consistente. Afinal, já se imaginou sem seu querido smartphone? Para ajudar a manter seu celular em ótimo estado, aqui estão algumas dicas úteis:</p>

		<h2>Use capinhas e películas</h2>
		
		<p>
			Se previnir de acidentes é essencial. Investir nas famosas capinhas e películas é o primeiro passo para manter seu celular seguro contra arranhões, quedas e outros danos acidentais. Esses acessórios atuam como uma armadura, absorvendo impactos e protegendo a integridade física do aparelho.
		</p>
		
		<h2>Transporte consciente</h2>
		
		<p>Capinhas ajudam, mas não são suficientes. Transportar seu celular solto em uma bolsa, se batendo e raspando em outras coisas pode causar danos. Guarde-o em um local que o mantenha seguro e protegido, como um bolso com zíper ou um compartimento separado em sua bolsa. Também tome cuidado ao levar o celular no bolso da calça! Derrubar o coitado na calçada não é nada legal.</p>
		
		<h2>Cuidado com a bateria</h2>
		
		<p>Deixar a bateria superaquecer é péssimo. Pode prejudicar a vida útil do celular e até ser arriscado, com risco de estufamento. Também seja consciente ao carregá-la: use carregadores originais e não carregue em voltagens não suportadas.</p>
		
		<h2>Deixe-o limpinho</h2>
		
		<p>Manter seu celular limpo não é apenas estético, mas também ajuda a prevenir danos. Use um pano macio para remover poeira, sujeira e impressões digitais da tela e da parte traseira do dispositivo. Evite o uso de produtos químicos agressivos ─ eles podem danificar o dispositivo.</p>
		
		<h2>Fique alerta com o ambiente</h2>
		
		<p>Evite exposição a condições extremas, como temperaturas muito altas ou baixas, que podem prejudicar o funcionamento interno do seu celular. Além disso, evite a exposição a líquidos. Caso aconteça um acidente com água, o <strong>Secafone</strong> pode te ajudar!</p>
		
		<p>Seguindo essas dicas simples, você pode prolongar a vida útil do seu celular, garantindo um desempenho consistente e preservando suas funcionalidades. Isso ajudará a evitar gastos com reparos e substituições, além de contribuir com o planeta ao diminuir o descarte de lixo eletrônico.</p>`,
	},
	"o-que-fazer": {
		slug: "o-que-fazer",
		image: oQueFazer,
		title: "O que fazer quando o celular cai na água",
		publishedAt: "06/09/2024",
		updatedAt: "09/12/2024",
		description: "Como agir nessa emergência e salvar seu aparelho",
		content: `<p>Pia, banheira, piscina, vaso sanitário... Acidentes envolvendo smartphones e líquidos são comuns, e muitas pessoas não sabem como agir rapidamente para minimizar os danos. Muitos celulares hoje em dia são resistentes à água, mas não a prova d'água! Caso você passe por esse problema, seguir os passos corretos pode salvar seu aparelho e te poupar do gasto de uma nova aquisição.</p>
		
		<h2>O que fazer?</h2>
		<ul>
			<li><strong>Retire o celular da água imediatamente</strong>: Quanto mais tempo o aparelho permanecer submerso, maiores são as chances de danos irreversíveis. Assim, retire-o o mais rápido possível!</li>
			<li><strong>Desligue o celular</strong>: Se o telefone ainda estiver ligado, desligue-o para evitar curtos-circuitos. Ligar o aparelho para verificar se ainda está funcionando é tentador, mas isso pode comprometê-lo.</li>
			<li><strong>Remova partes externas</strong>: Tire a capinha, cartões de memória, chips SIM e, se possível, a bateria. Isso facilita o processo de secagem e evita danos a essas partes.</li>
			<li><strong>Seque o exterior</strong>: Use um pano seco ou papel toalha para absorver o excesso de água da superfície. Evite sacudir o celular para não espalhar a água para outras partes internas.</li>
			<li><strong>Não tenha pressa para ligar o celular</strong>: Espere até ter certeza de que o aparelho está completamente seco antes de ligá-lo. Tentar usar o celular molhado pode causar um curto-circuito.</li>
			<li><strong>Use o Secafone!</strong>: Após ter certeza que o celular pode ser ligado seguramente, utilize o Secafone para remover posśiveis restos de água na parte interna.</li>
			<li><strong>Leve para um técnico especializado</strong>: Mesmo seguindo todas as dicas, é sempre aconselhável procurar um especialista, principalmente se o celular não funcionar corretamente após a secagem. Lembre-se que esse artigo e o Secafone em si são apenas para lhe auxiliar, não substituindo a atuação de uma pessoa especializada.</li>
		</ul>

		<h2>O que NÃO fazer?</h2>
		<ul>
			<li><strong>Tentar ligar o celular imediatamente</strong>: Ligar o aparelho molhado pode causar curtos-circuitos e danificar componentes internos.</li>
			<li><strong>Usar aspirador de pó</strong>: O aspirador, devido à sua potência, pode estragar e até aspirar botões e componentes pequenos.</li>
			<li><strong>Usar secador de cabelo para secar o celular</strong>: O calor excessivo pode danificar permanentemente as peças internas do dispositivo.</li>
			<li><strong>Pressionar botões</strong>: Pressionar botões pode empurrar a água ainda mais para dentro do aparelho, agravando o problema.</li>
			<li><strong>Sacudir o celular</strong>: Agitar o aparelho pode espalhar a água para áreas sensíveis que ainda não foram atingidas.</li>
			<li><strong>Colocar o celular para carregar</strong>: Carregar um aparelho ainda molhado pode causar sérios danos, tanto ao dispositivo quanto à bateria.</li>
			<li><strong>Usar arroz para secagem</strong>: Embora o arroz seja uma solução popular, ele é eficaz apenas para secagem externa. Inclusive, deixar o celular muito tempo no arroz pode agravar ainda mais o problema, caso pequenos grãos entrem no dispositivo.</li>
			<li><strong>Deixar o celular exposto ao sol</strong>: Expor o dispositivo à luz solar direta pode causar superaquecimento e danificar a tela e componentes internos.</li>
		</ul>

		<p>Um celular molhado não é o fim dos tempos, mas uma intervenção rápida e correta pode evitar problemas maiores. </p>
`,
	},
};
