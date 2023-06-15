<script>
    import jan from '$lib/assets/jan.png';
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
    import AiFillLinkedin from "svelte-icons-pack/ai/AiFillLinkedin";
    import AiFillInstagram from "svelte-icons-pack/ai/AiFillInstagram";
    import IoMailOpen from "svelte-icons-pack/io/IoMailOpen";
	import Switch from './Switch.svelte';
</script>

<div class="fixed top-28 ml-16 w-auto flex flex-col z-20">
    <div class="border-l-4 border-black pl-3 mb-5">
        <h2 class="text-lg font-semibold">Software Engineering student <br> based in Gothenurg, Sweden</h2>
    </div>
    <img class="rounded-full w-64 ml-auto mr-auto" src="{jan}" alt="Me, Janos Litkei">
    <p class=" text-base text-center font-bold mt-8 mb-4">Don't hesitate to get in touch!</p>
    <div class="flex gap-5 ml-auto mr-auto">
        <Icon src="{AiFillGithub}" size="2em" />
        <Icon src="{AiFillLinkedin}" size="2em" />
        <Icon src="{AiFillInstagram}" size="2em" />
        <Icon src="{IoMailOpen}" size="2em" />
    </div>
    <div class="fixed bottom-12">
        <Switch />
    </div>
</div>

