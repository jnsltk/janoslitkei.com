<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import jan from '$lib/assets/jan.png';
	import arrow from '$lib/assets/arrow.svg';
</script>

<div
	class=" flex flex-col pb-8 pt-20"
>
	<h2 class="mb-6 relsticky ative font-display text-2xl font-semibold">About me</h2>
	<div class="w-full rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-2xl bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF1A] overflow-hidden">
			<img
			class="my-8 border-2 border-white border-opacity-25 ml-auto mr-auto w-1/2 rounded-full"
			src={jan}
			alt="Me, Janos Litkei"
		/>
		<div
		class="mx-6 mb-8 hyphens-auto text-justify text-base leading-relaxed"
	>
		<p class="mb-4">
			I'm a Hungarian software engineering student based in Gothenburg, Sweden. I have a lot of
			interests, and I'm always working on something. I have a passion for creating and tinkering
			with technology.
		</p>

		<p class="mb-4">
			Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from
			Chalmers University of Technology and the University of Gothenburg.
		</p>

		<p class="text-left font-semibold mb-2">
			<a class="underline" href="https://github.com/jnsltk" target="_blank"
				>Check out my GitHub<Icon
					src={HiSolidExternalLink}
					className="inline ml-1 mb-1"
					size="1.25em"
					color="#fafafa"
				/></a
			>
		</p>
		<p class="text-left font-semibold">
			<a
				class="underline"
				href="https://drive.google.com/file/d/1TQpehsPs22PEDoulPTd1mu4j35y_8eEo/view?usp=drive_link"
				target="_blank"
				>Take a look at my CV<Icon
					src={HiSolidExternalLink}
					className="inline ml-1 mb-1"
					size="1.25em"
					color="#fafafa"
				/></a
			>
		</p>
	</div>
	</div>
</div>
