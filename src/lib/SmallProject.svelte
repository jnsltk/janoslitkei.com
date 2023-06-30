<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let content;
</script>

<div
	class="mr-2 h-[27rem] w-[96vw] overflow-hidden rounded-xl bg-light-bg-300/50 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out md:h-[42rem] md:w-[92vw] lg:h-[31rem] lg:w-[30vw] lg:hover:scale-105 lg:hover:shadow-xl"
>
	<div class="px-6 py-6 md:px-8 md:py-10 lg:py-8">
		<h1 class="hidden font-display text-2xl font-bold mb-4 lg:block">Other projects</h1>
		<p class="mb-8">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="flex flex-wrap gap-5">
			{#each content as card}
				<div
					class="mr-4 max-w-xs border-l-4 border-gray-900 px-2 hover:border-accent-orange md:mr-4 md:max-w-[45%] md:px-4 lg:max-w-none"
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
					<p class="hyphens-auto text-justify text-sm md:mt-2">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
