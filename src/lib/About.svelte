<script>
	import Icon from 'svelte-icons-pack';
	import HiSolidExternalLink from 'svelte-icons-pack/hi/HiSolidExternalLink';
	import jan from '$lib/assets/jan.png'
</script>

<div class=" h-[calc(100dvh)] flex flex-col justify-start pt-20 pb-8 md:pt-32">
	<h2 class="lg:hidden font-display text-2xl font-semibold mb-3 ">About me</h2>
	<div class="text-base leading-relaxed text-justify hyphens-auto">
		<img class="float-left mb-1 mr-3 w-1/2 md:w-1/3 md:mr-5 rounded-full" src={jan} alt="Me, Janos Litkei" />

		<p class="mb-4">I'm a Hungarian software engineering student based in Gothenburg, Sweden. I have a lot of interests, and I'm always working on something. I have a passion for creating and tinkering with technology.</p>

        <p class="mb-4 md:mb-8">Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from Chalmers University of Technology and the University of Gothenburg.</p>

		<p class="absolute bottom-6 font-semibold text-left md:inline md:bottom-auto">
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
</div>
