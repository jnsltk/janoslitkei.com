<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import AiFillInstagram from 'svelte-icons-pack/ai/AiFillInstagram';
	import IoMailOpen from 'svelte-icons-pack/io/IoMailOpen';
</script>

<div class="left-0 right-0 top-0 z-20 flex justify-between px-4 pt-12 md:px-12 md:pt-20">
	<div>
		<a class="border-black hover:border-b-4" href="#home">
			<h1 class="mb-4 text-4xl font-bold text-emphasis md:text-5xl">Janos Litkei</h1>
		</a>
		<h2 class="text-lg font-medium text-emphasis md:text-xl">I like to code and build things for the web.</h2>
		<div class="mt-6 flex gap-4">
			<a href="https://github.com/jnsltk" target="_blank"
				><Icon src={AiFillGithub} size="1.65em" color="rgba(255, 255, 255, 0.68)"/></a
			>
			<a href="https://www.linkedin.com/in/janoslitkei/" target="_blank"
				><Icon src={AiFillLinkedin} size="1.65em" color="rgba(255, 255, 255, 0.68)" /></a
			>
			<a href="https://instagram.com/janoslitkei" target="_blank"
				><Icon src={AiFillInstagram} size="1.65em" color="rgba(255, 255, 255, 0.68)" /></a
			>
			<a href="mailto:janos.litkei@gmail.com"
				><Icon src={IoMailOpen} size="1.65em" color="rgba(255, 255, 255, 0.68)" /></a
			>
		</div>
	</div>

	<!-- Deal with nav later -->
	<!-- <nav class="hidden">
		<ul class=" mt-2 flex gap-10 text-base font-semibold">
			<li>
				<a
					on:click={container.scrollTo({ top: sections.heroSection, behavior: 'smooth' })}
					class="border-black hover:border-b-4"
					href="#home">Home</a
				>
			</li>
			<li>
				<a
					on:click={container.scrollTo({ top: sections.aboutSection, behavior: 'smooth' })}
					class="border-black hover:border-b-4"
					href="#about">About Me</a
				>
			</li>
			<li>
				<a
					on:click={container.scrollTo({ top: sections.expSection, behavior: 'smooth' })}
					class="border-black hover:border-b-4"
					href="#experience">My experience</a
				>
			</li>
			<li>
				<a
					on:click={container.scrollTo({ top: sections.projectsSection, behavior: 'smooth' })}
					class="border-black hover:border-b-4"
					href="#projects">Projects</a
				>
			</li>
			<li>
				<a
					on:click={container.scrollTo({ top: sections.contactSection, behavior: 'smooth' })}
					class="border-black hover:border-b-4"
					href="#contact">Contact</a
				>
			</li>
		</ul>
	</nav> -->
</div>
