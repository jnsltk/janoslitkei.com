<script>
    export let title;
    export let content;
</script>

<div class="border border-gray-300 rounded-lg shadow-lg py-5 px-8">
    <p class="font-bold">{title}</p>
    <ul class="list-disc list-inside">
        {#each content as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>