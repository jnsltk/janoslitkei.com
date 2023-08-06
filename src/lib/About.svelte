<script>
	import Icon from 'svelte-icons-pack';
	import FiExternalLink from 'svelte-icons-pack/fi/FiExternalLink';
	import jan from '$lib/assets/jan.png';
</script>

<section id="about" class="flex flex-col py-24 pb-8">
	<h2 class="mb-10 text-2xl font-semibold text-emphasis lg:sr-only">About me</h2>
	<div
		class="w-full overflow-hidden rounded-xl border border-stone-500/20 bg-gradient-to-b from-dark/25 to-dark/60 px-6 py-8 text-base leading-relaxed shadow-lg backdrop-blur-xl transition-all md:px-8 lg:py-6 lg:hover:shadow-2xl"
	>
		<img
			class="mb-8 ml-auto mr-auto mt-2 w-1/2 rounded-full border-4 border-stone-500 border-opacity-25 md:w-1/3 lg:mt-6 lg:w-[38%]"
			src={jan}
			alt="Me, Janos Litkei"
		/>
		<p class="mb-4">
			I am a Software Engineering student from Hungary based in Gothenburg, Sweden. I have a lot of
			interests and I'm always working on some project.
		</p>

		<p class="mb-4">
			Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from
			Chalmers University of Technology and the University of Gothenburg.
		</p>

		<p class="mb-4">
			When I'm not studying or coding, I'm usually outside in nature, enjoying a good book or taking
			analogue photos with one of my vintage cameras.
		</p>
		<p class="mt-10 text-left font-semibold text-emphasis">
			<a
				class="hover:text-accent focus-visible:text-accent"
				href="https://drive.google.com/file/d/1TQpehsPs22PEDoulPTd1mu4j35y_8eEo/view?usp=drive_link"
				target="_blank"
				>Take a look at my CV<Icon
					src={FiExternalLink}
					className="inline ml-1 mb-1"
					size="1em"
				/></a
			>
		</p>
	</div>
</section>
