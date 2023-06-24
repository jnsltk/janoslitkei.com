<script>
    import Icon from "svelte-icons-pack";
    import HiSolidExternalLink from "svelte-icons-pack/hi/HiSolidExternalLink";
    import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";


    export let img;
    export let title;
    export let desc;
    export let github;
    export let link;
    export let tech;

    if (!link) link = github;
</script>

<div class=" w-[24rem] h-[28rem] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out mb-8 flex flex-col bg-light-bg-300/50 backdrop-blur-md z-50">
    <a href={link}><img src={img} alt={desc} class="w-full"></a>
    <div class="px-8 py-6">
        <div class="font-semibold text-base mb-2"><a href={link}>{title}</a></div>
        <p class="text-sm mb-4">{desc}</p>
        <a class="text-sm font-semibold underline -ml-0.5" href={github} target="_blank"><Icon src={AiFillGithub} className="inline mr-1.5 mb-0.5" size="1.5em" color="black"/>Check it out on github!<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
    </div>
    <div class="px-8 pb-3 mt-auto">
        {#each tech as t}
            <span class="bg-accent-orange inline-block rounded-full px-2 py-1 text-xs font-base text-gray-50 mr-2 mb-2">{t}</span>
        {/each}
    </div>
</div>