<script>
	import Whatsapp from '../../components/whatsapp.svelte';
</script>

<svelte:head>
	<title
		>Entre em Contato | Informações de Contato do Especialista em Desenvolvimento de Sites</title
	>
	<meta
		name="description"
		content="Entre em contato com o especialista em desenvolvimento de sites para Landing Page, Site Institucional e Blog. Informe-se sobre nossos serviços e solicite um orçamento. Estamos prontos para ajudá-lo a se destacar no mercado digital."
	/>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<section>
			<div class="container px-6 py-12 mx-auto">
				<div class="text-center">
					<p class="font-medium text-5xl text-blue-600 dark:text-blue-400">Entre em contato</p>

					<p class="mt-3 ">Estou a sua disposição nos seguintes contatos.</p>
				</div>

				<div class=" py-9 grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
					<div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
						<div class="flex flex-col items-center justify-center text-center">
							<span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<a class="py-3" href="mailto:erivaldo@cafecomcodigo.com.br"
										>erivaldo@cafecomcodigo.com.br</a
									>

									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</span>

							<h2 class="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
							<p class="mt-2 text-gray-600 ">
								Me envie um email,<br /> contando um pouco sobre seu projeto e necessidades.
							</p>
							<a class="py-3 link link-info" href="mailto:erivaldo@cafecomcodigo.com.br"
								>erivaldo@cafecomcodigo.com.br</a
							>
						</div>
					</div>

					<div class="flex items-start rounded-xl bg-white p-4 shadow-lg justify-center">
						<div class="flex flex-col items-center justify-center text-center">
							<span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</span>

							<h2 class="mt-4 text-lg font-medium text-gray-800 ">Telefone</h2>
							<p class="mt-2 text-gray-600 ">
								Entre em contato direto pelo Whatsapp ,<br /> é só clicar no botão abaixo
							</p>
							<br />
							<Whatsapp />
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="flex justify-center" /> -->
		</section>
	</div>
</div>
