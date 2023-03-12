import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	// adicione aqui as suas configurações de SEO
	// por exemplo:
	seo: {
		title: 'Cafe com Codigo',
		description:
			'Empresa que cria sites para profissionais da saúde, criamos landingpage, site institucional, site completo com blog, robôs para atendimento whatsapp',
		keywords: 'criar site, site institucional, landingpage, blog, robô whatsapp'
	},
	preprocess: vitePreprocess()
};

export default config;
