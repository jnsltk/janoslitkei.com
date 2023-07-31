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
	class="flex flex-col overflow-hidden rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-2xl bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.05)] leading-relaxed"
>
	<a href={link}><img src={img} alt={desc} class="w-full" /></a>
	<div class="px-5 py-6">
		<div class="mb-2 text-xl font-semibold"><a href={link}>{title}</a></div>
		<p>{desc}</p>
	</div>
	<div class="mt-auto px-5 pb-6">
		<div class="mb-6">
			<a class="-ml-0.5 font-semibold underline" href={github} target="_blank"
				>Check it out on github!<Icon
					src={HiSolidExternalLink}
					className="inline ml-1 mb-1"
					size="1.25em"
					color="#fafafa"
				/></a
			>
		</div>
		{#each tech as t}
			<span
				class="mb-2 mr-1 inline-block rounded-full bg-slate-800 bg-opacity-30 px-4 py-1 text-sm"
				>{t}</span
			>
		{/each}
	</div>
</div>
