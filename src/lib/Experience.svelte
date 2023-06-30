<script>
	import ExpCard from './ExpCard.svelte';
</script>

<div class="flex h-[calc(100dvh)] flex-col justify-start pb-4 pt-20 md:pt-32 lg:ml-80">
	<h2 class="mb-3 font-display text-2xl font-semibold lg:hidden">My experience</h2>
	<div class="hyphens-auto text-justify text-base leading-relaxed lg:max-w-screen-md lg:hyphens-none lg:text-left">
		<p class="mb-2 md:mb-4">
			I have had experience working with many different technologies both as part of my studies at
			university and through my personal projects. I'm always looking to learn new things!
		</p>
	</div>
	<div
		class=" hide-scroll-bar -mx-4 flex snap-x snap-mandatory snap-always flex-nowrap gap-5 overflow-x-auto px-4 pb-6 pt-4 md:mb-2 md:flex-wrap md:gap-8 lg:px-8 lg:pb-10"
	>
		<div class="snap-start scroll-m-4">
			<ExpCard
				title="Backend Development"
				content={['Java', 'Spring Boot', 'Python', 'NodeJS', 'SQL', 'MongoDB', 'Docker']}
			/>
		</div>
		<div class="snap-start scroll-m-4">
			<ExpCard
				title="Frontend Development"
				content={['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'SvelteJS', 'React', 'VueJS']}
			/>
		</div>
		<div class="snap-start scroll-m-4 pr-16">
			<ExpCard
				title="Other areas of expertise"
				content={[
					'Object-oriented programming',
					'Agile project management',
					'Data structures and algorithms',
					'Requirements engineering',
					'UX design',
					'CI/CD Pipelines',
					'Systems Architecture'
				]}
			/>
		</div>
	</div>
	<div class="hyphens-auto text-justify text-base leading-relaxed">
		<p class="mb-2">
			I'm also fluent in 3 languages, namely English, Hungarian and Mandarin Chinese.
		</p>
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
