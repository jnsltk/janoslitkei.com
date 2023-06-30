<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let content;
</script>

<div
	class="mr-2 h-[27rem] w-[96vw] overflow-hidden rounded-xl bg-light-bg-300/50 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-xl md:hover:scale-105"
>
	<div class="px-6 py-4">
		<h2 class="mb-1 font-display text-xl font-semibold">Others</h2>
		<p class="mb-6">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="flex flex-wrap gap-2">
			{#each content as card}
				<div
					class="card mb-2 mr-4 max-w-xs border-l-4 border-gray-900 px-2 hover:border-accent-orange"
				>
					<a class="-ml-0.5 text-lg font-semibold underline" href={card.github} target="_blank"
						><Icon
							src={AiFillGithub}
							className="inline mr-1.5 mb-0.5"
							size="1.25em"
							color="black"
						/>{card.title}<Icon
							src={HiSolidExternalLink}
							className="inline ml-1 mb-1"
							size="1.25em"
							color="black"
						/></a
					>
					<p class="mb-2 text-sm">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
