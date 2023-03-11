<script>
	import imgUrl from '../assets/hometemplate.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main>
	<div class="hero min-h-screen bg-orange-200">
		<div class="hero-content flex-col lg:flex-row">
			<div class="dark:bg-gray-900">
				<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
				<div class="container mx-auto py-9 md:py-12 lg:py-24">
					<div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
						<div class="lg:w-6/12 flex justify-center items-center">
							<div>
								<h1
									class="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12"
								>
									Porquê adquirir um site ?
								</h1>
								<p
									class=" text-3xl dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600"
								>
									Ter um site é fundamental para profissionais e empresas que desejam se destacar no
									mercado digital e alcançar mais clientes. Por isso, oferecemos três modelos de
									sites: Landing Page, Site Institucional e Blog, cada um com suas características e
									valores.
								</p>
								<div class="py-5 flex-auto">
									<a href="/works"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" 
										>Saiba mais</button></a>
								</div>
							</div>
						</div>
						<div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
							<div class="relative w-full h-full">
								<img
									src={imgUrl}
									alt="image"
									width="600"
									class="rounded-xl bg-base-100 shadow-md duration-200 hover:scale-105 hover:shadow-xl"
								/>
							</div>
							<div class="mt-6 md:mt-8 lg:hidden">
								<button
									class="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
								>
									Discover More
									<div>
										<svg
											class="fill-stroke"
											width="22"
											height="24"
											viewBox="0 0 22 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0)">
												<path
													d="M0.453735 12H14.4537"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M10.4539 16L14.4539 12"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M10.4539 8L14.4539 12"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</g>
											<defs>
												<clipPath id="clip0">
													<rect width="21.7269" height="24" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
