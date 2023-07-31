<script>
	export let title;
	export let content;
</script>

<div
	class="overflow-hidden whitespace-nowrap rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-2xl bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF1A] px-5 py-6 leading-relaxed"
>
	<h2 class="mb-2 font-semibold">{title}</h2>
	<ul class="list-inside list-disc">
		{#each content as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
