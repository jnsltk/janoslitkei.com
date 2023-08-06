<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsGithub from "svelte-icons-pack/bs/BsGithub";
	import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin";
	import BsInstagram from "svelte-icons-pack/bs/BsInstagram";
	import BsEnvelopePaperFill from "svelte-icons-pack/bs/BsEnvelopePaperFill";
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
						class="active border-accent font-semibold text-emphasis transition-all hover:border-b-4 hover:text-accent focus-visible:border-b-4 focus-visible:text-accent hs-scrollspy-active:border-b-4 hs-scrollspy-active:text-accent"
						href="#about"
					>
						About
					</a>
				</li>
				<li class="my-3">
					<a
						class="border-accent font-semibold text-emphasis transition-all hover:border-b-4 hover:text-accent focus-visible:border-b-4 focus-visible:text-accent hs-scrollspy-active:border-b-4 hs-scrollspy-active:text-accent"
						href="#experience"
					>
						Experience
					</a>
				</li>
				<li class="my-3">
					<a
						class="border-accent font-semibold text-emphasis transition-all hover:border-b-4 hover:text-accent focus-visible:border-b-4 focus-visible:text-accent hs-scrollspy-active:border-b-4 hs-scrollspy-active:text-accent"
						href="#projects"
					>
						Projects
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<ul class="ml-1 mt-6 flex items-center" aria-label="Social media">
		<li class="mr-5 text-2xl ">
			<a href="https://github.com/jnsltk" class="hover:text-accent transition-all" target="_blank">
				<Icon src={BsGithub} className="icon" />
			</a>
		</li>
		<li class="mr-5 text-2xl">
			<a href="https://instagram.com/janoslitkei" class="hover:text-accent transition-all" target="_blank">
				<Icon src={BsInstagram}  />
			</a>
		</li>
		<li class="mr-5 text-2xl">
			<a href="https://www.linkedin.com/in/janoslitkei/" class="hover:text-accent transition-all" target="_blank">
				<Icon src={BsLinkedin}  />
			</a>
		</li>
		<li class="mr-5 text-2xl">
			<a href="mailto:janos.litkei@gmail.com" class="hover:text-accent transition-all">
				<Icon src={BsEnvelopePaperFill}  />
			</a>
		</li>
	</ul>
</header>
