<script>
	import jan from '$lib/assets/jan.png';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import AiFillInstagram from 'svelte-icons-pack/ai/AiFillInstagram';
	import IoMailOpen from 'svelte-icons-pack/io/IoMailOpen';
	import Switch from './Switch.svelte';
</script>

<div class="flex w-auto flex-col">
	<div class="mr-auto">
		<img class="mb-6 mr-auto w-52 rounded-full" src={jan} alt="Me, Janos Litkei" />
		<div class="ml-auto mr-auto flex justify-center gap-6">
			<a href="https://github.com/jnsltk" target="_blank"
				><Icon src={AiFillGithub} size="1.75em" /></a
			>
			<a href="https://www.linkedin.com/in/janoslitkei/" target="_blank"
				><Icon src={AiFillLinkedin} size="1.75em" /></a
			>
			<a href="https://instagram.com/janoslitkei" target="_blank"
				><Icon src={AiFillInstagram} size="1.75em" /></a
			>
			<a href="mailto:janos.litkei@gmail.com"><Icon src={IoMailOpen} size="1.75em" /></a>
		</div>
	</div>
</div>
