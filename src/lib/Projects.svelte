<script>
	import ProjectCard from "./ProjectCard.svelte";
    import kiwave from "$lib/assets/kiwave.png"
    import janoslitkei_com from "$lib/assets/janoslitkei_com.png"
	import SmallProject from "./SmallProject.svelte";

</script>
<div id="projects" class="ml-36 pt-[7.25rem] h-[150vh] mr-16 snap-start">
    <p class="mb-8">I have worked on a number of projects as part of my studies, and I have done quite a few personal projects as well. Below are a few of the most important ones.</p>

    <div class="flex gap-5 justify-start mb-4">
        <ProjectCard img={janoslitkei_com} title="janoslitkei.com" desc="This website, my personal portfolio." github="https://github.com/jnsltk/janoslitkei.com" link="https://janoslitkei.com" tech={["Svelte", "HTML", "CSS", "Tailwind", "Javascript"]} />

        <ProjectCard img={kiwave} title="KiWave Sonar System" desc="An ultrasonic sonar based monitoring system for a university project." github="https://github.com/jnsltk/kiwave-sonar-system" tech={["Svelte","HTML", "CSS", "JavaScript"]}/>
    </div>

    <h2 class="font-bold text-lg mb-4">Other small projects</h2>
    <p class="mb-2">I made some of these small projects to test out new technology, or to help me solve some small problems. These small projects are often the foundation of my larger projects.</p>

    <div class="flex gap-10 justify-start my-4">
        <SmallProject title="szotar_net" desc="Terminal-based client for the best Chinese-Hungarian dictionary written in Python" github="https://github.com/jnsltk/szotar_net" />
        <SmallProject title="youdao" desc="Yet another youdao Chinese dictionary client for the terminal, written in Go" github="https://github.com/jnsltk/youdao" />
    </div>

</div>