<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import AiFillInstagram from 'svelte-icons-pack/ai/AiFillInstagram';
	import IoMailOpen from 'svelte-icons-pack/io/IoMailOpen';
</script>

<header
	class="z-20 justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[38.2%] lg:flex-col lg:justify-between lg:py-24"
>
	<div>
		<h1 class="mb-4 text-4xl font-bold tracking-tight text-emphasis md:text-5xl">
			<a href="/">János Litkei</a>
		</h1>
		<h2 class="text-lg font-medium tracking-tight text-emphasis md:text-xl">
			I like to code and build things for the web.
		</h2>

		<nav class="nav hidden lg:block" aria-label="In-page jump links">
			<ul class="mt-16 w-max" data-hs-scrollspy="#scrollspy">
				<li class="my-3">
					<a
						class="active font-semibold text-emphasis border-accent hover:text-accent hover:border-b-4 focus-visible:text-accent focus-visible:border-b-4 hs-scrollspy-active:text-accent hs-scrollspy-active:border-b-4 transition-all"
						href="#about"
					>
						About
					</a>
				</li>
				<li class="my-3">
					<a
						class="font-semibold text-emphasis border-accent hover:text-accent hover:border-b-4 focus-visible:text-accent focus-visible:border-b-4 hs-scrollspy-active:text-accent hs-scrollspy-active:border-b-4 transition-all"
						href="#experience"
					>
						Experience
					</a>
				</li>
				<li class="my-3">
					<a
						class="font-semibold text-emphasis border-accent hover:text-accent hover:border-b-4 focus-visible:text-accent focus-visible:border-b-4 hs-scrollspy-active:text-accent hs-scrollspy-active:border-b-4 transition-all"
						href="#projects"
					>
						Projects
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="mt-6 flex gap-4" aria-label="Social media">
		<a href="https://github.com/jnsltk" target="_blank"
			><Icon src={AiFillGithub} size="1.65em" color="rgba(255, 255, 255, 0.68)" /></a
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
</header>
