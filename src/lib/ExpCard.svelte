<script>
    export let title;
    export let content;
</script>

<div class="rounded-lg max-w-lg overflow-hidden shadow-xl py-5 px-8">
    <h2 class="font-semibold mb-2">{title}</h2>
    <ul class="list-disc list-inside">
        {#each content as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>