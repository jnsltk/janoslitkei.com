<script>
	import About from '../lib/About.svelte';
	import Background from '../lib/Background.svelte';
	import Experience from '../lib/Experience.svelte';
	import Header from '../lib/Header.svelte';
	import Projects from '../lib/Projects.svelte';
	
</script>

<Background />
<Header/>

<div
	class="px-4 md:px-12"
>
	<About />
	<Experience />
	<Projects />
	<div class="my-16 leading-relaxed text-opacity-25 text-sm md:mt-32">
		Loosely designed in <a href="https://figma.com" target="_blank">Figma</a> and coded in <a href="https://code.visualstudio.com/">Visual Studio Code</a>. Built using <a href="https://svelte.dev">Svelte</a>, <a href="https://kit.svelte.dev/">SvelteKit</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>, deployed on <a href="https://vercel.com/">Vercel</a>. 
	</div>
	<div class="my-8 text-emphasis hover:text-accent focus-visible:text-accent"><a href="https://zh.janoslitkei.com/">中文版</a></div>
</div>
