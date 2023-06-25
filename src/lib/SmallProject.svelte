<script>
    import Icon from "svelte-icons-pack";
    import HiSolidExternalLink from "svelte-icons-pack/hi/HiSolidExternalLink";
    import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";

    export let content;
</script>

<div class="w-[48rem] h-[28rem] mr-[24rem] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out bg-light-bg-300/50 backdrop-blur-md">
    <div class="px-10 py-8 flex flex-wrap">    
        <h2 class="font-semibold font-display text-xl my-2 ">Other projects</h2>
        <p class="mb-4">Some other personal and university projects I've worked on that might be worth mentioning.</p>
        {#each content as card}
            <div class="card max-w-xs px-3 border-l-4 my-4 mr-4 border-gray-900 hover:border-accent-orange">
                <h2 class="font-semibold text-base mb-3">{card.title}</h2>
                <p class="mb-5 text-sm">{card.desc}</p>
                <a class="text-sm font-semibold underline -ml-0.5" href={card.github} target="_blank"><Icon src={AiFillGithub} className="inline mr-1.5 mb-0.5" size="1.5em" color="black"/>Check it out on github!<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
            </div>
        {/each}   
    </div>   
</div>
