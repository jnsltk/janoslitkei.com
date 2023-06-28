<script>
    export let container;
    export let sections;
</script>
<div class="fixed top-0 left-0 right-0 pt-12 px-16 flex justify-between z-20">
    <div class="">
        <h1 class="text-4xl font-display mb-4">Janos Litkei</h1>
        
    </div>
    <nav class="">
        <ul class=" mt-2 text-base font-semibold flex gap-10">
            <li><a on:click={container.scrollTo({top: sections.heroSection, behavior: 'smooth'})} class="hover:border-b-4 border-black" href="#home">Home</a></li>
            <li><a on:click={container.scrollTo({top: sections.aboutSection, behavior: 'smooth'})} class="hover:border-b-4 border-black" href="#about">About Me</a></li>
            <li><a on:click={container.scrollTo({top: sections.projectsSection, behavior: 'smooth'})} class="hover:border-b-4 border-black" href="#projects">Projects</a></li>
            <li><a on:click={container.scrollTo({top: sections.contactSection, behavior: 'smooth'})} class="hover:border-b-4 border-black" href="#contact">Contact</a></li>
        </ul>
    </nav>
</div>