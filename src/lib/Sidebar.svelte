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
    
    <div class="mr-auto">
        <img class="rounded-lg w-52 mr-auto mb-6" src="{jan}" alt="Me, Janos Litkei">
        <div class="flex justify-center gap-6 ml-auto mr-auto">
            <a href="https://github.com/jnsltk" target="_blank"><Icon src="{AiFillGithub}" size="1.75em" /></a>
            <a href="https://www.linkedin.com/in/janoslitkei/" target="_blank"><Icon src="{AiFillLinkedin}" size="1.75em" /></a>
            <a href="https://instagram.com/janoslitkei" target="_blank"><Icon src="{AiFillInstagram}" size="1.75em" /></a>
            <a href="mailto:janos.litkei@gmail.com"><Icon src="{IoMailOpen}" size="1.75em" /></a>
        </div>
    </div>
    
    <div class="fixed bottom-12">
        <Switch />
    </div>
</div>

