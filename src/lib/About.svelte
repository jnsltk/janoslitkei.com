<script>
    import { fly, fade } from "svelte/transition";
    import Icon from "svelte-icons-pack";
    import HiSolidExternalLink from "svelte-icons-pack/hi/HiSolidExternalLink";
</script>

<div id="about" class="ml-36 pt-40 h-screen mr-16 snap-start" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    <div class="leading-relaxed mr-40">
        <p class="mb-8">I'm a Hungarian software engineering student based in Gothenburg, Sweden. I have a plethora of interests, and I'm always working on something. I have a deep passion for creating and tinkering with technology. The excitement of digitalization drives me to constantly seek new opportunities for growth.</p>

        <p class="mb-8">Currently, I'm pursuing a joint Bachelor's degree in Software Engineering and Management from Chalmers University of Technology and the University of Gothenburg.</p>

        <h2 class="font-bold">My experience includes:</h2>
        <p>Backend Development: Java, Python, SQL, MongoDB</p>
        <p class="mb-8">Frontend Development: CSS & HTML, Tailwind CSS, JavaScript, SvelteJS</p>

        <h2 class="font-bold">Other areas of expertise:</h2>
        <ul class="mb-8">
            <li>Object-oriented programming</li>
            <li>Agile project management</li>
            <li>Data structures and algorithms</li>
            <li>Requirements engineering and UX design</li>
        </ul>
        
        <p class="font-bold">
            <a class="underline" href="https://github.com/jnsltk" target="_blank">Check out my GitHub<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
             or 
            <a class="underline" href="https://drive.google.com/file/d/1TQpehsPs22PEDoulPTd1mu4j35y_8eEo/view?usp=drive_link" target="_blank">take a look at my CV<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
        </p>
    </div>       
</div>