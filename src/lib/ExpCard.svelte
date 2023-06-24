<script>
    export let title;
    export let content;
</script>

<div class="rounded-lg max-w-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out py-5 px-8 bg-light-bg-300/50 backdrop-blur-md">
    <h2 class="font-semibold mb-2">{title}</h2>
    <ul class="list-disc list-inside">
        {#each content as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>