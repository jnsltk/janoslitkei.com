<script>
    import { fly, fade } from "svelte/transition";
    import Icon from "svelte-icons-pack";
    import HiSolidExternalLink from "svelte-icons-pack/hi/HiSolidExternalLink";
	import ExpCard from "./ExpCard.svelte";
</script>

<div class="ml-28 h-screen mr-16 flex">
    <div class="text-sm leading-relaxed mr-40 mt-auto mb-auto">
        <p class="mb-5">I'm a Hungarian software engineering student based in Gothenburg, Sweden. I have a lot of interests, and I'm always working on something. I have a passion for creating and tinkering with technology.</p>

        <p class="mb-6">Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from Chalmers University of Technology and the University of Gothenburg.</p>
        <h2 class="font-semibold font-display text-xl mb-2">My experience</h2>
        <div class="flex mb-10 justify-left gap-5">
            <ExpCard title="Backend Development" content={["Java", "Python", "NodeJS", "SQL", "MongoDB"]} />
            <ExpCard title="Frontend Development" content={["HTML", "CSS", "Tailwind CSS", "JavaScript", "SvelteJS"]} />
            <ExpCard title="Other areas of expertise" content={["Object-oriented programming", "Agile project management", "Data structures and algorithms", "Requirements engineering", "UX design"]} />
        </div>
            
        <p class="font-semibold">
            <a class="underline" href="https://github.com/jnsltk" target="_blank">Check out my GitHub<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
             or 
            <a class="underline" href="https://drive.google.com/file/d/1TQpehsPs22PEDoulPTd1mu4j35y_8eEo/view?usp=drive_link" target="_blank">take a look at my CV<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
        </p>
    </div>       
</div>