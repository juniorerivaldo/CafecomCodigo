<script>
	import imgUrl from '../assets/hometemplate.jpg';
</script>

<svelt:head>
	<title>Desenvolvimento de Sites - Criação de Sites Profissionais</title>
	<meta
		name="description"
		content="Descubra os três modelos de sites oferecidos para profissionais e empresas que desejam se destacar no mercado digital e alcançar mais clientes: Landing Page, Site Institucional e Blog. Saiba mais sobre suas características e valores."
	/>
	<link rel="canonical" href="https://cafecomcodigo.com.br" />
</svelt:head>
<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<div class="container mx-auto py-9 md:py-12 lg:py-14">
				<div class="flex flex-col lg:flex-row justify-center mx-4">
					<div class="lg:w-10/12 flex justify-center items-center">
						<div class="py-3 mt-3">
							<h1 class="text-4xl md:text-5xl xl:text-5xl font-semibold w-8/12">
								Porquê adquirir um site ?
							</h1>
							<div class="mt-2">
								<span class="inline-block w-40 h-1 rounded-full bg-blue-500" />
								<span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
								<span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
							</div>
							<p class="mt-4 text-gray-700 leading-relaxed">
								Ter um site é fundamental para qualquer profissional ou empresa da área da saúde que queira se destacar
								no mercado digital e alcançar mais pacientes. Com um site, é possível apresentar seus
								serviços e especialidades de forma clara e objetiva, além de aumentar a visibilidade da
								sua marca na internet.
							</p>
							<p class="mt-4 text-gray-700 leading-relaxed">
								Na área da saúde, é importante contar com um site que transmita confiança e credibilidade. No Café com Código, oferecemos três modelos de sites para atender às necessidades de
								diferentes tipos de profissionais da saúde:
							</p>
							<ul class="list-disc list-inside mt-4 text-gray-700 leading-relaxed">
								<li>
									<strong>Landing Page:</strong> ideal para quem precisa de uma página simples e objetiva
									para divulgar um serviço ou especialidade. Com um layout moderno e atrativo, a Landing
									Page é perfeita para capturar leads e converter visitantes em pacientes.
								</li>
								<li>
									<strong>Site Institucional:</strong> Indicado para clínicas e consultórios que precisam de um site
									completo, com várias páginas e funcionalidades. Com um design personalizado e uma estrutura
									intuitiva, o Site Institucional é perfeito para apresentar a história da clínica, seus
									valores, serviços e especialidades.
								</li>
								<li>
									<strong>Blog:</strong> Recomendado para profissionais que querem criar conteúdo relevante e engajar
									seu público-alvo. Com um blog, é possível compartilhar informações úteis e interessantes
									sobre o seu nicho de mercado na área da saúde, gerando tráfego orgânico e fortalecendo a autoridade
									da sua marca.
								</li>
							</ul>
							<p class="mt-4 text-gray-700 leading-relaxed py-3">
								Além disso, oferecemos serviços de consultoria e desenvolvimento web específicos para a área da saúde, para ajudar
								nossos clientes a criar sites de alta qualidade e com excelente custo-benefício. Entre em contato conosco para saber mais! 
							</p>
							<div class="flex justify-center py-3">
								<img
									src={imgUrl}
									alt="home pic"
									width="600"
									class="rounded-xl bg-base-100 shadow-md duration-200 hover:scale-105 hover:shadow-xl"
								/>
							</div>
							<div class="flex flex-col items-center justify-center py-3">
								<h1 class="text-3xl md:text-3xl xl:text-4xl font-semibold w-10/12 py-7 text-center">
									Saiba mais sobre o Café com Código
								</h1>
								<ul class="list-disc list-inside mt-4 text-gray-700 leading-relaxed">
									<li>
										<strong>Conheça nossa história:</strong>
										<a class="link link-accent" href="https://cafecomcodigo.com.br/sobre"
											>Sobre Erivaldo do Café com Código</a
										>
									</li>
									<li>
										<strong>Veja nossos serviços:</strong>
										<a class="link link-accent" href="https://cafecomcodigo.com.br/servicos"
											>Descubra o que temos a oferecer</a
										>
									</li>
									<li>
										<strong>Conheça nossos projetos:</strong>
										<a class="link link-accent" href="https://cafecomcodigo.com.br/projetos"
											>Veja alguns exemplos reais
										</a>
									</li>
									<li>
										<strong>Entre em contato conosco:</strong>
										<a class="link link-accent" href="https://cafecomcodigo.com.br/contato"
											>Gostaria de conversar sobre seu projeto</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
