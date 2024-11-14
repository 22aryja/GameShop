<script lang="ts">
    import emptyPic from "$lib/assets/empty.jpg"
	import type { Game } from "$lib/types/games";

    export let game: Game;
</script>

<div class="card">
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

        <span class="card-demo-desc-price">{game.price !=0 ? `${game.price}тг` : "FREE"}</span>
    </section>
</div>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
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
            align-items: center;
            justify-content: center;
            padding: 12px;
        }

        &-demo {
            width: 100%;
            height: 50%;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            &-desc {
                display: flex;
                flex-direction: column;
                gap: 15px;

                &-item {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: rgb(197, 191, 191);

                    &-name {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 100%;
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
                    justify-content: center;
                    align-items: center;
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
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
    }

    h1 {
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>