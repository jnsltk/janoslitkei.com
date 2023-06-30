<script>
	export let title;
	export let content;
</script>

<div
	class="overflow-hidden whitespace-nowrap rounded-lg bg-light-bg-300/50 px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out md:px-8 md:py-5 lg:hover:scale-105 lg:hover:shadow-xl"
>
	<h2 class="mb-2 font-semibold">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
