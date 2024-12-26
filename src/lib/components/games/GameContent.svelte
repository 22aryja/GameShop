<script lang="ts">
    import GameCard from "./GameCard.svelte";
    import data from "$lib/dummy/games.json";
	import type { Game, Games } from "$lib/types/games";
	import FilterBlock from "../FilterBlock.svelte";
	import { scale } from "svelte/transition";

    let games: Games = data as Games;

    let selectedYears: string[] = $state([]);
    let selectedPrices: number[] = $state([]);
    let hasRussianDub: boolean | null = $state(null);
    let selectedRating: string[] = $state([]);
    
    let filteredGames: Game[] = $derived(games.games.filter((game: Game) => {
        const yearMatch = selectedYears.length > 0 ? selectedYears.includes(game.releaseYear) : game;
        const priceMatch = selectedPrices.length > 0 ? game.price <= selectedPrices[selectedPrices.length - 1] : game;
        const dubMatch = hasRussianDub !== null ? hasRussianDub === game.russianDubbing : game;
        const ratingMatch = selectedRating.length > 0 ? selectedRating.includes(game.usersRating) : game;

        return yearMatch && priceMatch && dubMatch && ratingMatch;
    }));
</script>

<section class="content-wrapper">
    <FilterBlock 
        bind:selectedYears
        bind:selectedPrices
        bind:hasRussianDub
        bind:selectedRating
    />

    <div class="content">
        {#each filteredGames as game, index}
            <div class="content-item" transition:scale>
                <GameCard {game} id={index + 1} />
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    .content {
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 20px;
        row-gap: 40px;
        height: 100%;
        width: 100%;
        justify-items: center;

        &-wrapper {
            overflow: auto;
            height: 100%;
        }
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
</style>