<script>
	import arrow from '$lib/assets/arrow.svg';
	import { fly, fade } from 'svelte/transition';
</script>

<div class="ml-28 mr-16 flex h-screen flex-col justify-end">
	<div class="mb-12">
		<p class="font-display text-7xl">I like to code, <br />and build things.</p>
		<p class="mt-14 text-right text-base">
			Find out who I am <img
				class="ml-5 inline w-24 pt-6"
				src={arrow}
				alt="Scroll down to see more"
			/>
		</p>
	</div>
</div>
