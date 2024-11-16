<script lang="ts">
    import GameCard from "./GameCard.svelte";
    import data from "$lib/dummy/games.json";
	import type { Games } from "$lib/types/games";
	import Checkbox from "../Checkbox.svelte";

    let games: Games = data as Games;

    let releaseYears: string[] = [];

</script>

<!-- <div>
    <section>
        <h1>Release Year</h1>
        <p>
            <span>
                <span>2019</span>
                <Checkbox on:click={() => releaseYears.push("2019")} />
            </span>
            
        </p>
    </section>
</div> -->

<div class="content">
    {#each games.games as game, index}
        <GameCard {game} id={index + 1}/>
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