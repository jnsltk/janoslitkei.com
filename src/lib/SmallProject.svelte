<script>
	import Icon from 'svelte-icons-pack';
	import FiExternalLink from "svelte-icons-pack/fi/FiExternalLink";

	export let content;
</script>

<div
	class="flex flex-col overflow-hidden rounded-xl border border-white border-opacity-20 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.05)] leading-relaxed shadow-lg backdrop-blur-2xl"
>
	<div class="px-5 py-6">
		<h1 class="mb-2 text-xl font-bold text-emphasis">Other projects</h1>
		<p class="mb-8">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="-mb-3 flex flex-wrap">
			{#each content as card}
				<div class="mb-4">
					<div class="mb-2">
						<a class="font-semibold text-emphasis hover:text-accent focus-visible:text-accent" href={card.github} target="_blank"
							>{card.title}<Icon
								src={FiExternalLink}
								className="inline ml-1 mb-1"
								size="1em"
							/></a
						>
					</div>
					<p class="leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
