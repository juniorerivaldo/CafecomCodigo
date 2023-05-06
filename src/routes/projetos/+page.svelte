<script>
	import imgUrl1 from '../../assets/psicosono.png';
	import imgUrl2 from '../../assets/institucional.png';
</script>

<svelte:head>
	<title>Projetos</title>
	<meta name="description" content="Projetos" />
	<link rel="canonical" href="https://cafecomcodigo.com.br/projetos" />

</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="py-16 ">
			<div
				class="h-full rounded-xl mb-5 shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
			>
				<div class="p-6">
					<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">BLOG</h2>
					<h1 class="title-font text-lg font-medium text-gray-600 mb-3">Psicosono</h1>
					<div class="mockup-window w-full border bg-base-300">
						<div class="flex justify-center px-4 py-16 ">
							<img src={imgUrl1} alt="blog" class="rounded"/>
						</div>
					</div>
					<p class="leading-relaxed mb-3 py-7">
						Projeto realizado para a Psicóloga Gabriela Salvador, utilizando o modelo BLOG,
						<br>
						Projeto conta com a página principal com uma breve introdução da profissional e sua especialidade de atendimento.
						<br>
						Temos a página contato com informações como email, tel e endereço do consultório com google maps.
						<br>
						Uma página com informações mais detalhadas da profissional e por fim o Blog onde a profissional pode realizar postagens de textos.
						<br>
						<br> click no
						link abaixo para acessar a pagina e conhecer o projeto.
					</p>
					<div class="flex items-center flex-wrap ">
						<a target="_blank" rel="noopener noreferrer" href="https://psicosono.com.br/">
							<button
								class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
								>Saiba mais</button
							>
						</a>
					</div>
				</div>
			</div>
			<div
				class="h-full rounded-xl mb-5 shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
			>
				<div class="p-6">
					<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
						INSTITUCIONAL
					</h2>
					<h1 class="title-font text-lg font-medium text-gray-600 mb-3">Psico Elizabeth</h1>
					<div class="mockup-window w-full border bg-base-300">
						<div class="flex justify-center px-4 py-16 ">
							<img src={imgUrl2} alt="institucional" class="rounded"/>
						</div>
					</div>
					<p class="leading-relaxed mb-3 py-7 ">
						Projeto realizado para a demonstar o modelo institucional.<br /> Conta com uma pagina
						principal com uma breve introdução ao profissional, e uma descrição de como pode ajudar
						o paciente. <br /> A segunda página conta com as informações principais do profissional.
						<br />
						Após temos uma página com informações relevantes sobre como funcionam as consulta e por fim
						uma página com os contatos do profissional, neste modelo você tem a opção de escolher qual
						esquema de cores lhe agrada mais para sua página institucional.

						<br>
						<br>
						Click no link abaixo para acessar a página e conhecer o projeto.
					</p>
					<div class="flex items-center flex-wrap ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://institucional.cafecomcodigo.com.br/"
						>
							<button
								class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
								>Saiba mais</button
							>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
