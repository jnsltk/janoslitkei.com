<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let content;
</script>

<div
	class="mr-2 h-[27rem] w-[96vw] md:h-[42rem] md:w-[92vw] overflow-hidden rounded-xl bg-light-bg-300/50 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out lg:hover:shadow-xl lg:hover:scale-105"
>
	<div class="px-6 py-4 md:px-8 md:py-10">
		<h2 class="mb-1 font-display text-xl font-semibold">Others</h2>
		<p class="mb-6">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="flex flex-wrap gap-2 md:gap-5">
			{#each content as card}
				<div
					class="mr-4 md:mr-4 max-w-xs border-l-4 border-gray-900 px-2 md:px-4 hover:border-accent-orange md:max-w-[45%]"
				>
					<a class="-ml-0.5 text-base font-semibold underline" href={card.github} target="_blank"
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
					<p class="md:mt-2 text-sm text-justify hyphens-auto">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
