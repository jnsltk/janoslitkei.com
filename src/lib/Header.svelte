<script>
	export let container;
	export let sections;
</script>

<div
	class="fixed left-0 right-0 top-0 z-20 flex justify-between px-4 pt-4 md:px-14 lg:px-16 lg:pt-12"
>
	<div class="">
		<a
			on:click={container.scrollTo({ top: sections.heroSection, behavior: 'smooth' })}
			class="border-black hover:border-b-4"
			href="#home"
		>
			<h1 class="mb-4 font-display text-4xl">Janos Litkei</h1>
		</a>
	</div>
	<nav class="hidden lg:block">
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
	</nav>
</div>
