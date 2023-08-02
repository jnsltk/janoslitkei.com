<script>
	export let title;
	export let content;
</script>

<div
	class="overflow-hidden whitespace-nowrap rounded-xl border border-white border-opacity-20 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.05)] px-5 py-6 leading-relaxed shadow-lg backdrop-blur-2xl md:px-10 md:py-8"
>
	<h2 class="mb-2 font-semibold text-emphasis">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
