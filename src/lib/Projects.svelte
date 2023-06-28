<script>
	import ProjectCard from "./ProjectCard.svelte";
    import kiwave from "$lib/assets/kiwave.png"
    import janoslitkei_com from "$lib/assets/janoslitkei_com.png"
	import SmallProject from "./SmallProject.svelte";
	import { onMount } from "svelte";    
</script>

<div class="text-sm ml-24 pt-[8rem] h-screen">
    <p class="ml-2 mr-16 -mb-3 ">I have worked on a number of projects as part of my studies, and I have done quite a few personal projects as well. Some are web-focused, while others are more general Software Engineering projects. Below are a few of the most important ones.</p>

    <div class="flex flex-nowrap gap-12 py-12 pl-8 snap-x snap-mandatory snap-always overflow-x-auto hide-scroll-bar">
        <div class=" snap-start scroll-ml-8">
            <ProjectCard img={janoslitkei_com} title="janoslitkei.com" desc="My personal portfolio and website, the one you're currently looking at." github="https://github.com/jnsltk/janoslitkei.com" link="https://janoslitkei.com" tech={["Svelte", "HTML", "CSS", "Tailwind", "Javascript"]} />
        </div>
        <div class=" snap-start scroll-ml-8">
            <ProjectCard img={kiwave} title="KiWave Sonar System" desc="An ultrasonic sonar based monitoring system for a university project." github="https://github.com/jnsltk/kiwave-sonar-system" tech={["Svelte","HTML", "CSS", "JavaScript"]}/>
        </div>
        <div class=" snap-start scroll-ml-8">
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