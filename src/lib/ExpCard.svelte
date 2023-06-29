<script>
	export let title;
	export let content;
</script>

<div
	class="max-w-lg overflow-hidden rounded-lg bg-light-bg-300/50 px-8 py-5 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
>
	<h2 class="mb-2 font-semibold">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
