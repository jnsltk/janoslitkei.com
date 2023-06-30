<script>
	import ProjectCard from './ProjectCard.svelte';
	import kiwave from '$lib/assets/kiwave.png';
	import janoslitkei_com from '$lib/assets/janoslitkei_com.png';
	import SmallProject from './SmallProject.svelte';
</script>

<div class="h-[calc(100dvh)] pt-20 text-sm ">
	<h2 class="md:hidden font-display text-2xl font-semibold">Projects</h2>
	<div
		class="hide-scroll-bar flex snap-x snap-mandatory snap-always flex-nowrap gap-4 overflow-x-auto py-3 pl-6 -mx-4"
	>
		<div class=" snap-start scroll-ml-2">
			<ProjectCard
				img={janoslitkei_com}
				title="janoslitkei.com"
				desc="My personal portfolio and website, the one you're currently looking at. Made with SvelteJS and SvelteKit, deployed on Vercel."
				github="https://github.com/jnsltk/janoslitkei.com"
				link="https://janoslitkei.com"
				tech={['Svelte', 'HTML', 'CSS', 'Tailwind', 'Javascript']}
			/>
		</div>
		<div class=" snap-start scroll-ml-2">
			<ProjectCard
				img={kiwave}
				title="KiWave Sonar System"
				desc="An ultrasonic sonar based monitoring system for a university project, consisting of a web-based UI and an arduino-like microcontroller."
				github="https://github.com/jnsltk/kiwave-sonar-system"
				tech={['Svelte', 'HTML', 'CSS', 'JavaScript']}
			/>
		</div>
		<div class=" snap-start scroll-ml-2">
			<SmallProject
				content={[
					{
						title: 'Snakegame',
						desc: 'A simple snake game created in Java and JavaFX for a university project.',
						github: 'https://github.com/jnsltk/snakegame'
					},
					{
						title: 'szotar_net',
						desc: 'Terminal-based client for the best Chinese-Hungarian dictionary written in Python',
						github: 'https://github.com/jnsltk/szotar_net'
					},
					{
						title: 'youdao',
						desc: 'Yet another youdao Chinese dictionary client for the terminal, written in Go',
						github: 'https://github.com/jnsltk/youdao'
					}
				]}
			/>
		</div>
	</div>
	<p class="mt-2 text-right text-base animate-pulse">Scroll for more --->></p>
</div>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
