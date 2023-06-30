<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let img;
	export let title;
	export let desc;
	export let github;
	export let link;
	export let tech;

	if (!link) link = github;
</script>

<div
	class=" z-50 flex h-[27rem] w-[96vw] md:w-[92vw] md:h-[42rem] flex-col overflow-hidden rounded-xl bg-light-bg-300/50 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out lg:hover:scale-105 lg:hover:shadow-xl"
>
	<a href={link}><img src={img} alt={desc} class="w-full" /></a>
	<div class="px-6 py-4 md:px-8 md:py-6">
		<div class="mb-2 text-base font-semibold"><a href={link}>{title}</a></div>
		<p class="text-sm">{desc}</p>
		
	</div>
	<div class="mt-auto px-6 pb-4">
		<div class="mb-3">
			<a class="-ml-0.5 text-sm font-semibold underline" href={github} target="_blank"
			><Icon src={AiFillGithub} className="inline mr-1.5 mb-0.5" size="1.5em" color="black" />Check
			it out on github!<Icon
				src={HiSolidExternalLink}
				className="inline ml-1 mb-1"
				size="1.25em"
				color="black"
			/></a
		>
		</div>
		{#each tech as t}
			<span
				class="font-base mb-2 mr-1 inline-block rounded-full bg-accent-orange px-2 py-1 text-xs text-gray-50"
				>{t}</span
			>
		{/each}
	</div>
</div>
