<script>
	import ProjectCard from './ProjectCard.svelte';
	import kiwave from '$lib/assets/kiwave.png';
	import janoslitkei_com from '$lib/assets/janoslitkei_com.png';
	import SmallProject from './SmallProject.svelte';
</script>

<div class="pt-20">
	<h2 class="text-2xl font-semibold pb-8">Projects</h2>
	<div
		class="hide-scroll-bar flex flex-col gap-8"
	>
		<ProjectCard
			img={janoslitkei_com}
			title="janoslitkei.com"
			desc="My personal portfolio and website, the one you're currently looking at. Made with SvelteJS and SvelteKit, deployed on Vercel."
			github="https://github.com/jnsltk/janoslitkei.com"
			link="https://janoslitkei.com"
			tech={['Svelte', 'HTML', 'CSS', 'Tailwind', 'Javascript']}
		/>
		<ProjectCard
			img={kiwave}
			title="KiWave Sonar System"
			desc="An ultrasonic sonar based monitoring system for a university project, consisting of a web-based UI and an arduino-like microcontroller."
			github="https://github.com/jnsltk/kiwave-sonar-system"
			tech={['Svelte', 'HTML', 'CSS', 'JavaScript']}
		/>
		<SmallProject
			content={[
				{
					title: 'Snakegame',
					desc: "A simple snake game created using Java 17 and JavaFX for a university course called 'Mini Project: Team Programming'.",
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

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
