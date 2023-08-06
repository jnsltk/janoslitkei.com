<script>
	export let title;
	export let content;
</script>

<div
	class="overflow-hidden whitespace-nowrap rounded-xl border border-stone-500/20 bg-gradient-to-b from-dark/25 to-dark/60 px-5 py-6 leading-relaxed shadow-lg backdrop-blur-xl transition-all md:px-7 md:py-5 lg:hover:shadow-2xl"
>
	<h2 class="mb-2 font-semibold text-emphasis">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
