<script>
	export let title;
	export let content;
</script>

<div
	class="whitespace-nowrap overflow-hidden rounded-lg bg-light-bg-300/50 px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out md:hover:scale-105 hover:shadow-xl"
>
	<h2 class="mb-2 font-semibold">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
