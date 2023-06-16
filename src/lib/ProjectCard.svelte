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

<div class="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 mb-8">
    <a href={link}><img src={img} alt={desc} class="w-full border-b-2 border-gray-300"></a>
    <div class="px-8 py-6">
        <div class="font-bold text-lg mb-2"><a href={link}>{title}</a></div>
        <p class="text-base mb-4">{desc}</p>
        <a class="font-bold underline -ml-0.5" href={github} target="_blank"><Icon src={AiFillGithub} className="inline mr-1.5 mb-0.5" size="1.5em" color="black"/>Check it out on github!<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
    </div>
    <div class="px-8 pb-2">
        {#each tech as t}
            <span class="tech inline-block rounded-full px-3 py-1 text-sm font-base text-gray-50 mr-2 mb-2">{t}</span>
        {/each}
    </div>
</div>

<style>
    .tech {
        background-color: #D4815D;
    }
</style>