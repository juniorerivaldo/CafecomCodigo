<script>
	import imgUrl from '../../assets/profile.jpeg';
</script>

<svelte:head>
	<title>Sobre</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="py-16 ">
			<div class="container px-6  md:px-12 xl:px-6">
				<div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div class="md:5/12 lg:w-5/12">
						<img
							src={imgUrl}
							alt="image"
							width="600"
							class="rounded-xl bg-base-100 shadow-md duration-200 hover:scale-105 hover:shadow-xl"
						/>
					</div>
					<div class="md:7/12 lg:w-6/12">
						<h2 class="text-2xl font-bold md:text-4xl">
							Olá, <br />
							Sou Erivaldo ! 👋🏻
						</h2>
						<div class="mt-2">
							<span class="inline-block w-40 h-1 rounded-full bg-blue-500" />
							<span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
							<span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
						</div>
						<p class="mt-6 text-2xl text-gray-600">
							Erivaldo Junior é um desenvolvedor freelancer que faz parte da equipe da Café com
							Código. Com vasta experiência em desenvolvimento de páginas e sistemas com tecnologias
							atuais, ele se especializou em projetos de landing page, site institucional e site
							blog voltado para profissionais da saúde e outras ocupações. Além disso, Erivaldo
							possui habilidades em desenvolver sites responsivos, que se adaptam a qualquer
							dispositivo e garantem a melhor experiência do usuário. Ele também é especialista em
							robôs para atendimento automático no WhatsApp, proporcionando um atendimento rápido e
							eficiente aos clientes.
						</p>
						<p class="mt-4 text-2xl text-gray-600">
							Erivaldo é altamente comprometido com a satisfação dos seus clientes e busca sempre
							entender as suas necessidades para poder oferecer soluções personalizadas e
							eficientes. Seu trabalho é marcado pela atenção aos detalhes, pela qualidade e pela
							rapidez na entrega dos projetos. Se você está em busca de um desenvolvedor de
							confiança e altamente capacitado para ajudar a sua empresa a crescer, Erivaldo Junior
							é a escolha certa.
						</p>
						<p class="mt-4 text-2xl text-gray-600">
							Entre em contato com a Café com Código e agende uma consulta para conhecer melhor o
							trabalho deste talentoso desenvolvedor.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
