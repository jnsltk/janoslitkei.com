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
    let aboutSection;
    let projectsSection;
    let contactSection;
    let container;

    let distance;
    let opacity;

    let scrollAnimationFrame;

    const fadeAndScale = (container, neighbour) => {
        // reduce opacity from 1 to 0
        // scale from 1 to 0.5 
        let rect = container.getBoundingClientRect();
        let neighbourRect = neighbour.getBoundingClientRect();

        distance = neighbourRect.y - rect.y;

        opacity = 1 / height * distance;
        if (opacity > 0.9) {
            opacity = 1;
        } else if (opacity < 0.1) {
            opacity = 0;
        }

        container.style.opacity = `${opacity}`;

        let scale = ( (opacity - 0) / (1 - 0) ) * (1 - 0.75) + 0.75;
        container.style.transform = `scale(${scale})`
    }
    
    const scrollHandler = () => {
        if (!container) return;

        cancelAnimationFrame(scrollAnimationFrame);
        scrollAnimationFrame = requestAnimationFrame(() => {
            fadeAndScale(heroSection, aboutSection);
            fadeAndScale(aboutSection, projectsSection);
            fadeAndScale(projectsSection, contactSection);
        });
    }

</script>

<svelte:window bind:innerHeight={height} />

<div>
    <Background />
    <Header />
    <Sidebar />

    <div bind:this={container} on:scroll={scrollHandler} class=" relative ml-72 h-screen snap-always snap-mandatory snap-y overflow-y-auto">
        <section bind:this={heroSection} class="sticky top-0 will-change-transform transform-gpu">
            <Hero />
        </section>
        <section bind:this={aboutSection} class="sticky top-0 will-change-transform transform-gpu">
            <About />
        </section>
        <section bind:this={projectsSection} class="sticky top-0 will-change-transform transform-gpu">
            <Projects />
        </section>
        <section bind:this={contactSection} class="sticky top-0 will-change-transform transform-gpu">
            <Contact />
        </section>
    </div>
</div>
