<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';

	export let content;
</script>

<div
	class="flex flex-col overflow-hidden rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-2xl bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF1A] leading-relaxed"
>
	<div class="px-5 py-6">
		<h1 class="text-xl font-bold mb-2">Other projects</h1>
		<p class="mb-8">
			Some other personal and university projects I've worked on that are worth mentioning.
		</p>
		<div class="flex flex-wrap -mb-3 ">
			{#each content as card}
				<div class="mb-4">
					<div class="mb-2">
						<a class="font-semibold underline" href={card.github} target="_blank"
							>{card.title}<Icon
								src={HiSolidExternalLink}
								className="inline ml-1 mb-1"
								size="1.25em"
								color="black"
							/></a
						>
					</div>
					<p class="hyphens-auto text-justify leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
