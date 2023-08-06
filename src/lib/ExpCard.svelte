<script>
	export let title;
	export let content;
</script>

<div
	class="overflow-hidden whitespace-nowrap rounded-xl bg-gradient-to-b from-dark/10 to-dark/40 px-5 py-6 leading-relaxed shadow-lg backdrop-blur-xl md:px-7 md:py-5 transition-all lg:hover:shadow-2xl"
>
	<h2 class="mb-2 font-semibold text-emphasis">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
