<script>
	import ProjectCard from "./ProjectCard.svelte";
    import kiwave from "$lib/assets/kiwave.png"
    import janoslitkei_com from "$lib/assets/janoslitkei_com.png"
	import SmallProject from "./SmallProject.svelte";
	import { onMount } from "svelte";

    let projectCardContainer1;
    let projectCardContainer2;
    let smallProjectCardContainer;

    let maxDist;

    const fade = (fadedCont, neighbourCont) => {
        let fadedRect = fadedCont.getBoundingClientRect();
        let neighbourRect = neighbourCont.getBoundingClientRect();
        let distance = neighbourRect.x - fadedRect.x;
        let opacity = 1 / maxDist * distance;

        fadedCont.style.opacity = opacity;
    }
    
    const scrollHandler = (event) => {
        if (!projectCardContainer1 || !projectCardContainer2 || !smallProjectCardContainer) return;

        fade(projectCardContainer1, projectCardContainer2);
        fade(projectCardContainer2, smallProjectCardContainer);
    }

    onMount(() => {
        maxDist = projectCardContainer2.getBoundingClientRect().x - projectCardContainer1.getBoundingClientRect().x;
    })
    
</script>

<div id="projects" class="text-sm ml-24 pt-[8rem] h-screen snap-start">
    <p class="ml-2 mr-16 -mb-3 ">I have worked on a number of projects as part of my studies, and I have done quite a few personal projects as well. Some are web-focused, while others are more general Software Engineering projects. Below are a few of the most important ones.</p>

    <div on:scroll={scrollHandler} class="flex flex-nowrap gap-6 py-12 pl-10 snap-x snap-mandatory snap-always overflow-x-auto hide-scroll-bar">
        <div bind:this={projectCardContainer1} class=" snap-start scroll-ml-10 sticky left-0">
            <ProjectCard img={janoslitkei_com} title="janoslitkei.com" desc="My personal portfolio and website, the one you're currently looking at." github="https://github.com/jnsltk/janoslitkei.com" link="https://janoslitkei.com" tech={["Svelte", "HTML", "CSS", "Tailwind", "Javascript"]} />
        </div>
        <div bind:this={projectCardContainer2} class=" snap-start scroll-ml-10 sticky left-0">
            <ProjectCard img={kiwave} title="KiWave Sonar System" desc="An ultrasonic sonar based monitoring system for a university project." github="https://github.com/jnsltk/kiwave-sonar-system" tech={["Svelte","HTML", "CSS", "JavaScript"]}/>
        </div>
        <div bind:this={smallProjectCardContainer} class=" snap-start scroll-ml-10">
            <SmallProject content={[
                {
                    title: "Snakegame",
                    desc: "A simple snake game created in Java and JavaFX for a university project.",
                    github: "https://github.com/jnsltk/snakegame"
                },
                {
                    title: "szotar_net",
                    desc: "Terminal-based client for the best Chinese-Hungarian dictionary written in Python",
                    github: "https://github.com/jnsltk/szotar_net"
                },
                {
                    title: "youdao",
                    desc: "Yet another youdao Chinese dictionary client for the terminal, written in Go",
                    github: "https://github.com/jnsltk/youdao"
                },
            ]} />
        </div>
    </div>        
</div>

<style>
    .hide-scroll-bar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .hide-scroll-bar::-webkit-scrollbar {
      display: none;
    }
</style>