<svelte:head>
	<title>Serviços</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-black font-bold text-white">
	<div class=" text-center space-y-12">
		<div class="text-center text-5xl font-bold">
			Serviços Oferecidos
			<div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
				<span class="animate-word col-span-full row-span-full">Blog</span>
				<span class="animate-word-delay-1 col-span-full row-span-full">Landing Page</span>
				<span class="animate-word-delay-2 col-span-full row-span-full">Website</span>
				<span class="animate-word-delay-3 col-span-full row-span-full">Pagina Institucional</span>
			</div>
		</div>
		<p class=" text-white">
			Deseja me contratar para criar seu site <a
				class="underline"
				href="mailto:erivaldo@cafecomcodigo.com.br">me envie um email aqui!</a
			>
		</p>
	</div>
</div>

<style>
	@keyframes word {
		0% {
			transform: translateY(100%);
		}
		15% {
			transform: translateY(-10%);
			animation-timing-function: ease-out;
		}

		20% {
			transform: translateY(0);
		}

		40%,
		100% {
			transform: translateY(-110%);
		}
	}

	.animate-word {
		animation: word 7s infinite;
	}
	.animate-word-delay-1 {
		animation: word 7s infinite;
		animation-delay: -1.4s;
	}
	.animate-word-delay-2 {
		animation: word 7s infinite;
		animation-delay: -2.8s;
	}
	.animate-word-delay-3 {
		animation: word 7s infinite;
		animation-delay: -4.2s;
	}
	.animate-word-delay-4 {
		animation: word 7s infinite;
		animation-delay: -5.6s;
	}
</style>
