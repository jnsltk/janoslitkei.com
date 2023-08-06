<script>
	import ExpCard from './ExpCard.svelte';
</script>

<section id="experience" class="flex flex-col justify-start pb-4 pt-24">
	<h2 class="mb-6 text-2xl font-semibold text-emphasis lg:sr-only">My experience</h2>
	<div class="text-base leading-relaxed">
		<p class="mb-6">
			I have had experience working with many different technologies both as part of my studies at
			university and through my personal projects. I'm always looking to learn new things!
		</p>
	</div>
	<div
		class="hide-scroll-bar -mx-4 flex snap-x snap-mandatory snap-always flex-nowrap gap-5 overflow-x-auto px-4 pb-8 pt-4 md:-mx-12 md:gap-8 md:px-12 lg:flex-wrap"
	>
		<div class="snap-start scroll-m-4 md:scroll-m-12">
			<ExpCard
				title="Backend Development"
				content={['Java', 'Spring Boot', 'Python', 'NodeJS', 'SQL', 'MongoDB', 'Docker']}
			/>
		</div>
		<div class="snap-start scroll-m-4 md:scroll-m-12">
			<ExpCard
				title="Frontend Development"
				content={['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'SvelteJS', 'React', 'VueJS']}
			/>
		</div>
		<div class="snap-start scroll-m-4 pr-16 md:scroll-m-12 md:pr-64">
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
	<div class="text-base leading-relaxed">
		<p class="mb-2">
			I also have a BA degree in Chinese Language and Culture, and I'm fluent in three languages
			(English, Hungarian and Mandarin Chinese).
		</p>
	</div>
</section>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
