<script>
	import About from "../lib/About.svelte";
	import Background from "../lib/Background.svelte";
	import Contact from "../lib/Contact.svelte";
    import Header from "../lib/Header.svelte";
	import Hero from "../lib/Hero.svelte";
	import Projects from "../lib/Projects.svelte";
	import Sidebar from "../lib/Sidebar.svelte";

    let height;

    let heroSection;
    let heroScroller;

    let aboutSection;
    let aboutScroller;

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

        distance = (neighbourRect.y + neighbourRect.bottom / 2) - rect.y / 8;

        opacity = 1 / height * distance;
        if (opacity > 0.95) {
            opacity = 1;
        } else if (opacity < 0.35) {
            opacity = 0;
        }
    
        container.style.opacity = `${opacity}`;

        let scale = ( (opacity - 0) / (1 - 0) ) * (1 - 0.65) + 0.65;
        container.style.transform = `scale(${scale})`
    }
    
    const scrollHandler = () => {
        if (!container) return;

        cancelAnimationFrame(scrollAnimationFrame);
        scrollAnimationFrame = requestAnimationFrame(() => {
            fadeAndScale(heroSection, heroScroller);
            fadeAndScale(aboutSection, aboutScroller);
            fadeAndScale(projectsSection, projectScroller);
        });
    }

</script>

<svelte:window bind:innerHeight={height} />

<div>
    <Background />
    <Header {container} sections={{heroSection, aboutSection, projectsSection, contactSection}}/>
    <Sidebar />

    <div bind:this={container} on:scroll={scrollHandler} class="scroll-smooth relative ml-72 h-screen snap-always snap-mandatory snap-y overflow-y-auto">
        <div id="home" class="snap-start">
            <section bind:this={heroSection} class="sticky top-0 will-change-auto">
                <Hero />
            </section>
            <div bind:this={heroScroller} class=" h-[75vh]" />
        </div>
        <div id="about" class="snap-start">
            <section bind:this={aboutSection} class="sticky top-0 will-change-auto">
                <About />
            </section>
            <div bind:this={aboutScroller} class=" h-[75vh]" />
        </div>
        <div id="projects" class="snap-start">
            <section bind:this={projectsSection} class="sticky top-0 will-change-auto">
                <Projects />
            </section>
            <div bind:this={projectScroller} class=" h-[75vh]" />
        </div>
        <div id="contact" class="snap-start">
            <section bind:this={contactSection} class="sticky top-0 will-change-auto">
                <Contact />
            </section>
        </div>
    </div>
</div>
