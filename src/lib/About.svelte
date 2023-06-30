<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import jan from '$lib/assets/jan.png';
	import arrow from '$lib/assets/arrow.svg';
</script>

<div
	class=" flex h-[calc(100dvh)] flex-col justify-start pb-8 pt-20 md:pt-32 lg:ml-80 lg:justify-end lg:pb-0"
>
	<h2 class="mb-3 font-display text-2xl font-semibold lg:hidden">About me</h2>
	<div
		class="hyphens-auto text-justify text-base leading-relaxed lg:max-w-screen-md lg:hyphens-none lg:text-left"
	>
		<img
			class="float-left mb-1 mr-3 w-1/2 rounded-full md:mr-5 md:w-1/3 lg:hidden"
			src={jan}
			alt="Me, Janos Litkei"
		/>

		<p class="mb-4">
			I'm a Hungarian software engineering student based in Gothenburg, Sweden. I have a lot of
			interests, and I'm always working on something. I have a passion for creating and tinkering
			with technology.
		</p>

		<p class="mb-4 md:mb-8">
			Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from
			Chalmers University of Technology and the University of Gothenburg.
		</p>

		<p class="absolute bottom-6 text-left font-semibold md:bottom-auto md:inline">
			<a class="underline" href="https://github.com/jnsltk" target="_blank"
				>Check out my GitHub<Icon
					src={HiSolidExternalLink}
					className="inline ml-1 mb-1"
					size="1.25em"
					color="black"
				/></a
			>
			or
			<a
				class="underline"
				href="https://drive.google.com/file/d/1TQpehsPs22PEDoulPTd1mu4j35y_8eEo/view?usp=drive_link"
				target="_blank"
				>take a look at my CV<Icon
					src={HiSolidExternalLink}
					className="inline ml-1 mb-1"
					size="1.25em"
					color="black"
				/></a
			>
		</p>
	</div>
	<p class="mb-8 mt-24 hidden animate-pulse text-right text-base lg:block">
		Check out my experience <img
			class="ml-5 inline w-20 pt-5"
			src={arrow}
			alt="Scroll down to see more"
		/>
	</p>
</div>
