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
	class="px-4"
>
	<About />
	<Experience />
	<Projects />
	<div class="my-16 leading-relaxed text-opacity-25 text-sm">
		Loosely designed in Figma, coded in Visual Studio Code. Built using SvelteKit and Tailwind CSS, deployed on Vercel. 
	</div>
</div>
