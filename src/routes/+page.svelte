<script>
	import About from '../lib/About.svelte';
	import Background from '../lib/Background.svelte';
	import Experience from '../lib/Experience.svelte';
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';
	import Projects from '../lib/Projects.svelte';
</script>

<svelte:head>
	<title>János Litkei</title>
</svelte:head>

<Background />

<div class="mx-auto min-h-screen max-w-screen-xl px-4 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
	<div class="lg:flex lg:justify-between lg:gap-12">
		<Header />
		<main id="content" class="lg:w-[61.8%]">
			<div id="scrollspy">
				<About />
				<Experience />
				<Projects />
			</div>
			<Footer />
		</main>
	</div>
</div>
