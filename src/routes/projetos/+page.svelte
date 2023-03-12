<script>
	import imgUrl from '../../assets/psicosono.png';
</script>

<svelte:head>
	<title>Projetos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="py-16 ">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-wrap -m-4">
						<div class="p-4 md:w-1/3">
							<div
								class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
							>
								<img
									class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
									src={imgUrl}
									alt="blog"
								/>
								<div class="p-6">
									<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
										BLOG
									</h2>
									<h1 class="title-font text-lg font-medium text-gray-600 mb-3">Psicosono</h1>
									<p class="leading-relaxed mb-3">
										Projeto realizado para a Psicóloga Gabriela Salvador, utilizando o modelo BLOG,
										click no link abaixo para acessar a pagina e conhecer o projeto.
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
						</div>
						<div class="p-4 md:w-1/3">
							<div
								class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden"
							>
								<img
									class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
									src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
									alt="blog"
								/>
								<div class="p-6">
									<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
										CATEGORY-1
									</h2>
									<h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
									<p class="leading-relaxed mb-3">
										Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
										tousled waistcoat.
									</p>
									<div class="flex items-center flex-wrap ">
										<button
											class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg"
											>Learn more</button
										>
									</div>
								</div>
							</div>
						</div>
						<div class="p-4 md:w-1/3">
							<div
								class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden"
							>
								<img
									class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
									src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
									alt="blog"
								/>
								<div class="p-6">
									<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
										CATEGORY-1
									</h2>
									<h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
									<p class="leading-relaxed mb-3">
										Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
										tousled waistcoat.
									</p>
									<div class="flex items-center flex-wrap ">
										<button
											class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg"
											>Learn more</button
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
