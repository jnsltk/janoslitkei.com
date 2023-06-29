<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let content;
</script>

<div
	class="mr-[24rem] h-[28rem] w-[48rem] overflow-hidden rounded-xl bg-light-bg-300/50 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
>
	<div class="flex flex-wrap px-10 py-8">
		<h2 class="my-2 font-display text-xl font-semibold">Other projects</h2>
		<p class="mb-4">
			Some other personal and university projects I've worked on that might be worth mentioning.
		</p>
		{#each content as card}
			<div
				class="card my-4 mr-4 max-w-xs border-l-4 border-gray-900 px-3 hover:border-accent-orange"
			>
				<h2 class="mb-3 text-base font-semibold">{card.title}</h2>
				<p class="mb-5 text-sm">{card.desc}</p>
				<a class="-ml-0.5 text-sm font-semibold underline" href={card.github} target="_blank"
					><Icon
						src={AiFillGithub}
						className="inline mr-1.5 mb-0.5"
						size="1.5em"
						color="black"
					/>Check it out on github!<Icon
						src={HiSolidExternalLink}
						className="inline ml-1 mb-1"
						size="1.25em"
						color="black"
					/></a
				>
			</div>
		{/each}
	</div>
</div>
