<script>
	import Icon from 'svelte-icons-pack';
	import FiExternalLink from 'svelte-icons-pack/fi/FiExternalLink';

	export let content;
</script>

<div
	class="flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-dark/10 to-dark/40 leading-relaxed shadow-lg backdrop-blur-sm transition-all lg:hover:scale-[1.01] lg:hover:shadow-2xl"
>
	<div class="px-5 py-6 md:px-10 md:py-8">
		<h1 class="mb-2 text-xl font-bold text-emphasis">Other projects</h1>
		<p class="mb-8">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="-mb-3 flex flex-wrap">
			{#each content as card}
				<div class="mb-4">
					<div class="mb-2">
						<a
							class="font-semibold text-emphasis hover:text-accent focus-visible:text-accent"
							href={card.github}
							target="_blank"
							>{card.title}<Icon src={FiExternalLink} className="inline ml-1 mb-1" size="1em" /></a
						>
					</div>
					<p class="leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
