<script>
    import arrow from "$lib/assets/arrow.svg"
    import { fly, fade } from "svelte/transition";
</script>

<div id="home" class=" ml-36 h-screen mr-16 snap-start flex flex-col justify-end" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    <div class="mb-12">
        <p class="font-display text-7xl">I like to code, <br>and build things.</p>
        <p class="mt-14 text-lg text-right">
            Find out who I am <img class="inline pt-6 ml-5 w-24" src={arrow} alt="Scroll down to see more">
        </p>
    </div>
</div>