<script>
	import Icon from 'svelte-icons-pack';
	import FiExternalLink from 'svelte-icons-pack/fi/FiExternalLink';
	import jan from '$lib/assets/jan.png';
</script>

<div class=" flex flex-col pb-8 pt-20">
	<h2 class="mb-6 text-2xl font-semibold text-emphasis">About me</h2>
	<div
		class="w-full overflow-hidden rounded-xl border border-white border-opacity-20 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.05)] pt-4 shadow-lg backdrop-blur-2xl"
	>
		<img
			class="my-8 ml-auto mr-auto w-1/2 rounded-full border-2 border-white border-opacity-25"
			src={jan}
			alt="Me, Janos Litkei"
		/>
		<div class="mx-6 mb-8 text-base leading-relaxed">
			<p class="mb-4">
				I am a Software Engineering student from Hungary based in Gothenburg, Sweden. I have a
				million interests and I'm always working on some project.
			</p>

			<p class="mb-4">
				Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management
				from Chalmers University of Technology and the University of Gothenburg.
			</p>

			<p class="mb-6">
				When I'm not studying or coding, I'm usually outside in nature, enjoying a good book or
				taking analogue photos with one of my vintage cameras.
			</p>

			<p class="mb-1 text-left font-semibold">
				<a
					class="text-emphasis hover:text-accent focus-visible:text-accent"
					href="https://github.com/jnsltk"
					target="_blank"
					>Check out my GitHub<Icon
						src={FiExternalLink}
						className="inline ml-1 mb-1"
						size="1em"
					/></a
				>
			</p>
			<p class="text-left font-semibold">
				<a
					class="text-emphasis hover:text-accent focus-visible:text-accent"
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
	</div>
</div>
