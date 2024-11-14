<script lang="ts">
    import GameCard from "./GameCard.svelte";
    import data from "$lib/dummy/games.json";
	import type { Games } from "$lib/types/games";

    let games: Games = data as Games;

</script>

<div class="content">
    {#each games.games as game}
        <GameCard {game} />
    {/each}
</div>

<style lang="scss">
    .content {
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 20px;
        row-gap: 5%;
        overflow: auto;
        height: 100%;
        width: 100%;
        justify-items: center;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
</style>