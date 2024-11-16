<script lang="ts">
	import { goto } from "$app/navigation";
    import emptyPic from "$lib/assets/empty.jpg"
	import type { Game } from "$lib/types/games";

    let { game, id}: {game: Game, id: number} = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card" on:click={() => goto(`/${id}`)}>
    <section class="card-image">
        {#if game.image}
            <img src={game.image} alt="game-pic" />
        {:else}
            <img src={emptyPic} alt="no-pic" />
        {/if}
    </section>

    <section class="card-demo">
        <div class="card-demo-desc">
            <span class="card-demo-desc-item">
                <h1>Name:</h1>
                <h1 class="card-demo-desc-item-name">{game.name}</h1>
            </span>

            <span class="card-demo-desc-item">
                <p>Author:</p>
                <p>{game.author}</p>
            </span>

            <span class="card-demo-desc-item">
                <p>Release date:</p>
                <p>{game.releaseYear}</p>
            </span>
        </div>

        <span class="card-demo-desc-price">{game.price !=0 ? `${game.price}₸` : "FREE"}</span>
    </section>
</div>

<style lang="scss">
    @use "/src/lib/styles/mixins.scss" as *;

    .card {
        @include flexColumn;
        border-radius: 12px;
        background: #222;
        width: 300px;
        height: 375px;
        overflow: hidden;
        user-select: none;
        transition: ease-in-out 0.33s;

        &-image {
            width: 100%;
            height: 50%;
            display: flex;
            @include jcc-aic;
            padding: 12px;
        }

        &-demo {
            width: 100%;
            height: 50%;
            padding: 12px;
            @include flexColumn;
            justify-content: space-between;
            
            &-desc {
                @include flexColumn;
                gap: 15px;

                &-item {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: rgb(197, 191, 191);

                    &-name {
                        @include flex-aic;
                        @include weightHeight100;
                        font-size: 125%;
                        white-space: nowrap;
                        word-wrap: none;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                    }
                }

                &-price {
                    display: flex;
                    width: 100%;
                    @include jcc-aic;
                    font-size: 24px;
                    text-decoration: underline;
                }
            }
        }

        &:hover {
            scale: 1.1;
            box-shadow: 0 0 30px #ffffffd0;
            border: 1px solid #ffffffd0;
        }
    }

    .readmore {
        text-align: center;
        text-shadow: 0 0 12px #fff;
    }

    img {
        @include weightHeight100;
        object-fit: cover;
        border-radius: 6px;
    }
</style>