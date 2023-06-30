<script>
	import About from '../lib/About.svelte';
	import Background from '../lib/Background.svelte';
	import Contact from '../lib/Contact.svelte';
	import Experience from '../lib/Experience.svelte';
	import Header from '../lib/Header.svelte';
	import Hero from '../lib/Hero.svelte';
	import Projects from '../lib/Projects.svelte';
	import Sidebar from '../lib/Sidebar.svelte';
	import Switch from '../lib/Switch.svelte';

	let height;

	let heroSection;
	let heroScroller;

	let aboutSection;
	let aboutScroller;

	let expSection;
	let expScroller;

	let projectsSection;
	let projectScroller;

	let contactSection;
	let container;

	let distance;
	let opacity;

	let scrollAnimationFrame;

	const fadeAndScale = (container, scroller) => {
		let rect = container.getBoundingClientRect();
		if (rect.top < -height || rect.top > height) return;

		let neighbourRect = scroller.getBoundingClientRect();

		distance = neighbourRect.y + neighbourRect.bottom / 15 - rect.y / 25;

		opacity = (1 / height) * distance;
		if (opacity > 0.95) {
			opacity = 1;
		} else if (opacity < 0.1) {
			opacity = 0;
		}

		container.style.opacity = `${opacity}`;

		let scale = ((opacity - 0) / (1 - 0)) * (1 - 0.65) + 0.65;
		container.style.transform = `scale(${scale})`;

		if (opacity < 0.75) {
			container.style.filter = `blur(${(1 - opacity) * 15}px)`;
		} else {
			container.style.filter = 'blur(0)';
		}
	};

	const scrollHandler = () => {
		if (!container) return;

		cancelAnimationFrame(scrollAnimationFrame);
		scrollAnimationFrame = requestAnimationFrame(() => {
			fadeAndScale(heroSection, heroScroller);
			fadeAndScale(aboutSection, aboutScroller);
			fadeAndScale(expSection, expScroller);
			fadeAndScale(projectsSection, projectScroller);
		});
	};
</script>

<svelte:window bind:innerHeight={height} />

<Background />
<Header {container} sections={{ heroSection, aboutSection, expSection, projectsSection, contactSection }} />
<div class="hidden lg:block fixed top-24 z-20 ml-8">
    <Sidebar />
</div>
<div class="hidden md:block fixed bottom-8 left-8">
		<Switch />
	</div>

<div
    bind:this={container}
    on:scroll={scrollHandler}
    class="relative px-4 md:px-8 h-[calc(100dvh)] snap-y snap-mandatory snap-always overflow-y-auto scroll-smooth"
>
    <div id="home" class="snap-start">
        <section bind:this={heroSection} class="sticky top-0 will-change-auto">
            <Hero />
        </section>
        <div bind:this={heroScroller} class=" h-[15vh]" />
    </div>
    <div id="about" class="snap-start">
        <section bind:this={aboutSection} class="sticky top-0 will-change-auto">
            <About />
        </section>
        <div bind:this={aboutScroller} class=" h-[15vh]" />
    </div>
	<div id="experience" class="snap-start">
        <section bind:this={expSection} class="sticky top-0 will-change-auto">
            <Experience />
        </section>
        <div bind:this={expScroller} class=" h-[15vh]" />
    </div>
    <div id="projects" class="snap-start">
        <section bind:this={projectsSection} class="sticky top-0 will-change-auto">
            <Projects />
        </section>
        <div bind:this={projectScroller} class=" h-[15vh]" />
    </div>
    <div id="contact" class="snap-start">
        <section bind:this={contactSection} class="sticky top-0 will-change-auto">
            <Contact />
        </section>
    </div>
</div>