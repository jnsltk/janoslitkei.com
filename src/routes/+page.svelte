<script>
	import About from '../lib/About.svelte';
	import Background from '../lib/Background.svelte';
	import Experience from '../lib/Experience.svelte';
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';
	import Projects from '../lib/Projects.svelte';
</script>

<Background />

<div class="mx-auto min-h-screen max-w-screen-xl px-4 py-12 md:py-20 md:px-12 lg:py-0 lg:px-24">
	<div class="lg:flex lg:justify-between lg:gap-8">
		<Header />
		<main id="content" class="lg:w-[61.8%]">
			<About />
			<Experience />
			<Projects />
			<Footer />
		</main>
	</div>
</div>
