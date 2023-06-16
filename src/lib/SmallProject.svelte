<script>
    import Icon from "svelte-icons-pack";
    import HiSolidExternalLink from "svelte-icons-pack/hi/HiSolidExternalLink";
    import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";

    export let title;
    export let desc;
    export let github;
</script>

<div class="card max-w-xs px-6 border-l-4 border-gray-900 ">
    <h2 class="font-bold text-base mb-3">{title}</h2>
    <p class="mb-5">{desc}</p>
    <a class="font-bold underline -ml-0.5" href={github} target="_blank"><Icon src={AiFillGithub} className="inline mr-1.5 mb-0.5" size="1.5em" color="black"/>Check it out on github!<Icon src={HiSolidExternalLink} className="inline ml-1 mb-1" size="1.25em" color="black"/></a>
</div>

<style>
    .card:hover {
    border-color: #D4815D;
}
</style>