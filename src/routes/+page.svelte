<script>
	import imgUrl from '../assets/hometemplate.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<div class="container mx-auto py-9 md:py-12 lg:py-24">
				<div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
					<div class="lg:w-6/12 flex justify-center items-center">
						<div>
							<h1 class="text-4xl md:text-5xl xl:text-6xl font-semibold w-7/12">
								Porquê adquirir um site ?
							</h1>
							<div class="mt-2">
								<span class="inline-block w-40 h-1 rounded-full bg-blue-500" />
								<span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
								<span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
							</div>
							<p
								class="   md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600"
							>
								Ter um site é fundamental para profissionais e empresas que desejam se destacar no
								mercado digital e alcançar mais clientes. Por isso, oferecemos três modelos de
								sites: Landing Page, Site Institucional e Blog, cada um com suas características e
								valores.
							</p>
							<div class="py-5 flex-auto">
								<a href="/servicos"
									><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Saiba mais</button></a
								>
							</div>
						</div>
					</div>
					<div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
						<div class="relative w-full h-full">
							<img
								src={imgUrl}
								alt="home pic"
								width="600"
								class="rounded-xl bg-base-100 shadow-md duration-200 hover:scale-105 hover:shadow-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
